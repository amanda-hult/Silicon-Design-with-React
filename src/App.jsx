import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/header/Header'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DarkModeProvider from './components/contexts/DarkModeContext'


function App() {
  useEffect(() => {
    AOS.init();
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
          <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
