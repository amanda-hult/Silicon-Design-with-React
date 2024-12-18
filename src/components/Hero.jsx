import React from 'react'
import { HashLink } from 'react-router-hash-link'
import MarketButtons from './MarketButtons'

function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="frontpage">
          <h1 className="l-heading headline" data-aos="fade-right" aos-duration="600">Manage All Your <br /> Money in One App</h1>

          <div className="content" data-aos="fade-right" aos-duration="600">
            <p className="l-font opacity80">We offer you a new generation of the mobile banking. <br className="line-break" />Save, spend & manage money in your pocket.</p>
            <MarketButtons />
            <div>
              <HashLink className="expand" smooth to="/#app-features"><span><i className="arrow-btn fa-regular fa-angle-down"></i></span><span className="s-font discover-more opacity80">Discover more</span></HashLink>
            </div>
          </div> 

          <div className="app-illustration" data-aos="fade-left" aos-duration="600">
            <img className="img-back" src="/app-on-iphone-budget.svg" alt="App on Iphone your budget" />
            <img className="img-front" src="/app-on-iphone-transactions.svg" alt="App on Iphone your cards" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero