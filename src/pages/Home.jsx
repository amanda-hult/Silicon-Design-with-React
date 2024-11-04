import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/features/Features'
import HowTo from '../components//howtosection/HowTo'
import AppInfo from '../components/appinfo/AppInfo'
import Reviews from '../components/reviews/Reviews'
import Faq from '../components/faq/Faq'
import Subscribe from '../components/subscribe/Subscribe'

function Home({ heroRef}) {
  return (
    <>
      <Hero ref={heroRef} />
      <Features />
      <HowTo />
      <AppInfo />
      <Reviews />
      <Faq />
      <Subscribe />
    </>
  )
}

export default Home