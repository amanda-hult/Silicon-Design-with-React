import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/Hero'
import Features from './components/features/Features'
import HowTo from './components/HowTo'
import AppInfo from './components/AppInfo'
import Reviews from './components/Reviews'
import Faq from './components/faq/Faq'
import Footer from './components/Footer'
import Subscribe from './components/subscribe/Subscribe'



function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Features />
        <HowTo />
        <AppInfo />
        <Reviews />
        <Faq />
        <Subscribe />
      </main>
      <Footer />
        
    </>
  )
}



export default App
