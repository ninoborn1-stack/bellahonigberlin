import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { ScrollProgress, Grain } from './components/Chrome.jsx'
import { useLenis, lenis } from './lib/useLenis.js'

import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Course from './pages/Course.jsx'
import Story from './pages/Story.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useLenis()
  return (
    <>
      <Grain />
      <ScrollProgress />
      <Nav />
      <CartDrawer />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/produkt/:slug" element={<Product />} />
          <Route path="/haekelkurs" element={<Course />} />
          <Route path="/geschichte" element={<Story />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
