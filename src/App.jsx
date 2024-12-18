import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/header/Header'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DarkModeProvider from './components/contexts/DarkModeContext'
import ScrollToTopButton from './components/ScrollToTopButton'


function App() {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });
  }, []);

  return (
    <DarkModeProvider>
      <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </main>
          <ScrollToTopButton />
          <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
