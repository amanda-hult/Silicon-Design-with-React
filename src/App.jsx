import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/header/Header'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleImages = (isDarkMode) => {
    if (heroRef.current) {
      const appleImage = heroRef.current.querySelector('theme-image-apple');
      const googleImage = heroRef.current.querySelector('theme-image-google');
      if (appleImage && googleImage) {
        appleImage.src = isDarkMode ? '/appstore-dark.svg': '/appstore.svg';
        googleImage.src = isDarkMode ? '/googleplay-dark.svg': '/googleplay.svg';
      }
    }
  };

  return (
    <BrowserRouter>
        <Header toggleImages={toggleImages}/>
        <main>
          <Routes>
            <Route path="/" element={<Home heroRef={heroRef} />} />
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}



export default App
