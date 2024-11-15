import React from 'react'
import HowToCarousel from './HowToCarousel'

function HowTo() {
  return (
    <>
      <section className="how-to-section">
        <div className="container-how-to">
          <h2 className="m-heading p-tb-1">How Does It Work?</h2>

          <div className="sc-pics-mobile p-tb-1">
              <img className="sc" src="/sc-mobile.svg" alt="App illustration" />
          </div>
          
          <div className="sc-pics-tablet p-tb-1">
              <img className="sc-bg-tablet" src="/iphone-bg-tablet.svg" alt="iPhone 12" />

              <img className="sc" src="/sc-2-tablet.svg" alt="App illustration" />
              <img className="sc" src="/sc-1-tablet.svg" alt="App illustration" />
              <img className="sc" src="/sc-3-tablet.svg" alt="App illustration" />
          </div>

          <div className="mobile-text">
              <h3 className="s-heading mobile-text">Transfer to people from your contact list</h3>
              <p className="m-font mobile-text opacity80">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>

          <div className="sc-pics-desktop p-tb-1">
            <HowToCarousel />
          </div>
        </div>
      </section>
    </>
  )
}

export default HowTo