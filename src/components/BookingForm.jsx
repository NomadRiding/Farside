import { useState } from "react"
import { charterPackages, blockedDates } from "../data/charterPackages"
import "../styles/BookingForm.css"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[\d\s\-+().]{7,20}$/

function todayString() {
  return new Date().toISOString().split("T")[0]
}

function validateForm(values) {
  const errors = {}

  if (!values.customerName.trim()) {
    errors.customerName = "Name is required."
  }
  if (!values.customerEmail.trim()) {
    errors.customerEmail = "Email is required."
  } else if (!EMAIL_PATTERN.test(values.customerEmail)) {
    errors.customerEmail = "Enter a valid email address."
  }
  if (!values.customerPhone.trim()) {
    errors.customerPhone = "Phone number is required."
  } else if (!PHONE_PATTERN.test(values.customerPhone)) {
    errors.customerPhone = "Enter a valid phone number."
  }
  if (!values.charterType) {
    errors.charterType = "Select a charter package."
  }
  if (!values.preferredDate) {
    errors.preferredDate = "Select a preferred date."
  } else if (values.preferredDate < todayString()) {
    errors.preferredDate = "Date cannot be in the past."
  } else if (blockedDates.includes(values.preferredDate)) {
    errors.preferredDate = "This date is unavailable. Please choose another."
  }
  if (!values.partySize) {
    errors.partySize = "Enter your party size."
  } else if (Number(values.partySize) < 1 || Number(values.partySize) > 6) {
    errors.partySize = "Party size must be between 1 and 6."
  }

  return errors
}

export default function BookingForm({ onSubmit, loading, apiError }) {
  const [values, setValues] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    charterType: charterPackages[0]?.id || "",
    preferredDate: "",
    partySize: "",
    notes: "",
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState(false)

  const selectedPackage = charterPackages.find(
    (p) => p.id === values.charterType,
  )
  const charterPackageGroups = [
    { label: "Offshore", packages: charterPackages.slice(0, 3) },
    { label: "Sailfish Special", packages: charterPackages.slice(3, 4) },
    { label: "Reef Fishing", packages: charterPackages.slice(4) },
  ].filter((group) => group.packages.length > 0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (touched) {
      setErrors(validateForm({ ...values, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    const validationErrors = validateForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    onSubmit({
      ...values,
      partySize: Number(values.partySize),
      charterTypeName: selectedPackage?.name || values.charterType,
    })
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-form__grid">
        <div className="form-field">
          <label htmlFor="customerName">Full Name</label>
          <input
            id="customerName"
            name="customerName"
            type="text"
            autoComplete="name"
            value={values.customerName}
            onChange={handleChange}
            aria-invalid={errors.customerName ? "true" : "false"}
            aria-describedby={
              errors.customerName ? "customerName-error" : undefined
            }
          />
          {errors.customerName && (
            <p id="customerName-error" className="form-error" role="alert">
              {errors.customerName}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="customerEmail">Email</label>
          <input
            id="customerEmail"
            name="customerEmail"
            type="email"
            autoComplete="email"
            value={values.customerEmail}
            onChange={handleChange}
            aria-invalid={errors.customerEmail ? "true" : "false"}
            aria-describedby={
              errors.customerEmail ? "customerEmail-error" : undefined
            }
          />
          {errors.customerEmail && (
            <p id="customerEmail-error" className="form-error" role="alert">
              {errors.customerEmail}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="customerPhone">Phone</label>
          <input
            id="customerPhone"
            name="customerPhone"
            type="tel"
            autoComplete="tel"
            value={values.customerPhone}
            onChange={handleChange}
            aria-invalid={errors.customerPhone ? "true" : "false"}
            aria-describedby={
              errors.customerPhone ? "customerPhone-error" : undefined
            }
          />
          {errors.customerPhone && (
            <p id="customerPhone-error" className="form-error" role="alert">
              {errors.customerPhone}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="charterType">Charter Package</label>
          <select
            id="charterType"
            name="charterType"
            value={values.charterType}
            onChange={handleChange}
            aria-invalid={errors.charterType ? "true" : "false"}
            aria-describedby={
              errors.charterType ? "charterType-error" : undefined
            }
          >
            {charterPackageGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} — ${pkg.price}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {selectedPackage && (
            <p className="form-hint">{selectedPackage.description}</p>
          )}
          {errors.charterType && (
            <p id="charterType-error" className="form-error" role="alert">
              {errors.charterType}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="preferredDate">Preferred Date</label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={todayString()}
            value={values.preferredDate}
            onChange={handleChange}
            aria-invalid={errors.preferredDate ? "true" : "false"}
            aria-describedby={
              errors.preferredDate ? "preferredDate-error" : undefined
            }
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" className="form-error" role="alert">
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="partySize">Party Size (max 6)</label>
          <input
            id="partySize"
            name="partySize"
            type="number"
            min="1"
            max="6"
            value={values.partySize}
            onChange={handleChange}
            aria-invalid={errors.partySize ? "true" : "false"}
            aria-describedby={errors.partySize ? "partySize-error" : undefined}
          />
          {errors.partySize && (
            <p id="partySize-error" className="form-error" role="alert">
              {errors.partySize}
            </p>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="notes">Special Requests (optional)</label>
        <textarea
          id="notes"
          name="notes"
          rows="4"
          placeholder="Dietary needs, experience level, target species..."
          value={values.notes}
          onChange={handleChange}
        />
      </div>

      {selectedPackage && (
        <div className="booking-form__summary" aria-live="polite">
          <p>
            <strong>Total:</strong> ${selectedPackage.price} —{" "}
            {selectedPackage.duration}
          </p>
          <p className="form-hint">
            You will be redirected to Stripe to complete payment securely.
          </p>
        </div>
      )}

      {apiError && (
        <p className="form-error form-error--block" role="alert">
          {apiError}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={loading}
      >
        {loading ? "Redirecting to payment…" : "Pay & Book"}
      </button>

      <p className="booking-form__legal">
        By booking, you agree to our cancellation policy. Cancellations made 48+
        hours before your trip receive a full refund. See our{" "}
        <a href="/about#policies">policies</a> for details.
      </p>
    </form>
  )
}
