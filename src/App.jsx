import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ChartersPage from './pages/ChartersPage'
import AboutPage from './pages/AboutPage'
import CaptainServicesPage from './pages/CaptainServicesPage'
import YachtsPage from './pages/YachtsPage'
import ContactsPage from './pages/ContactsPage'
import ReviewsPage from './pages/ReviewsPage'
import BookNowPage, { BookSuccessPage } from './pages/BookNowPage'
import CtaFunnelPage from './pages/CtaFunnelPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="charters" element={<ChartersPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="captain-services" element={<CaptainServicesPage />} />
        <Route path="yachts" element={<YachtsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="book" element={<BookNowPage />} />
        <Route path="book/success" element={<BookSuccessPage />} />
        <Route path="get-started" element={<CtaFunnelPage />} />
      </Route>
    </Routes>
  )
}
