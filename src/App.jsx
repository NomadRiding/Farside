import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import BookNowPage, { BookSuccessPage } from './pages/BookNowPage'
import CtaFunnelPage from './pages/CtaFunnelPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="book" element={<BookNowPage />} />
        <Route path="book/success" element={<BookSuccessPage />} />
        <Route path="get-started" element={<CtaFunnelPage />} />
      </Route>
    </Routes>
  )
}
