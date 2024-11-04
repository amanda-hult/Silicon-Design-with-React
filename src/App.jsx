import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/header/Header'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = (isDarkMode) => {
    setDarkMode(isDarkMode);
  };

  const marketButton = [
    {
      id: 1,
      src: darkMode ? "/appstore-dark.svg" : '/appstore.svg',
      alt: "AppStore button",
      ariaLabel: "App-Store",
      link: "https://www.apple.com/se/app-store/"
    },
    {
      id: 2,
      src: darkMode ? '/googleplay-dark.svg' : "/googleplay.svg",
      alt: "GooglePlay button",
      ariaLabel: "Google-Play",
      link: "https://play.google.com/"
    },
  ];

  return (
    <BrowserRouter>
        <Header darkModeToggle={handleDarkModeToggle}/>
        <main>
          <Routes>
            <Route path="/" element={<Home marketButton={marketButton}/>} />
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App
