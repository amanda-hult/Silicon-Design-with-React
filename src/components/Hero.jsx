import React from 'react'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="frontpage">
          <h1 className="l-heading headline">Manage All Your <br /> Money in One App</h1>

          <div className="content">
            <p className="l-font">We offer you a new generation of the mobile banking. <br className="line-break" />Save, spend & manage money in your pocket.</p>
            <div className="market-btns">
              <a className="btn-app" href="#"><img id="theme-image-apple" src="/appstore.svg" alt="AppStore button" /></a>
              <a className="btn-app" href="#"><img id="theme-image-google" src="/googleplay.svg" alt="GooglePlay button" /></a>  
            </div>
            <div>
              <a className="expand" href="#app-features"><span><i className="arrow-btn fa-regular fa-angle-down"></i></span><span className="s-font discover-more">Discover more</span></a>
            </div>
          </div> 

          <div className="app-illustration">
            <img className="img-back" src="/app-on-iphone-budget.svg" alt="App on Iphone your budget" />
            <img className="img-front" src="/app-on-iphone-transactions.svg" alt="App on Iphone your cards" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero