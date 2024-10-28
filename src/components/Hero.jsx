import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="frontpage">
          <h1 className="l-heading headline" data-aos="fade-right" aos-duration="600">Manage All Your <br /> Money in One App</h1>

          <div className="content" data-aos="fade-right" aos-duration="600">
            <p className="l-font">We offer you a new generation of the mobile banking. <br className="line-break" />Save, spend & manage money in your pocket.</p>
            <div className="market-btns">
              <a className="btn-app" href="https://www.apple.com/se/app-store/" aria-label="App-Store" target='_blank'><img id="theme-image-apple" src="/appstore.svg" alt="AppStore button" /></a>
              <a className="btn-app" href="https://play.google.com/" aria-label="Google-Play" target='_blank'><img id="theme-image-google" src="/googleplay.svg" alt="GooglePlay button" /></a>  
            </div>
            <div>
              <HashLink className="expand" smooth to="/#app-features"><span><i className="arrow-btn fa-regular fa-angle-down"></i></span><span className="s-font discover-more">Discover more</span></HashLink>
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