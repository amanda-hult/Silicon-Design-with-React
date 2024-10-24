import React from 'react'

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
              <p className="m-font mobile-text">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>

          <div className="sc-pics-desktop p-tb-1">
            <div className="carousel">
              <input type="radio" name="slider" id="sc-1"/*  checked  *//>
              <input type="radio" name="slider" id="sc-2" />
              <input type="radio" name="slider" id="sc-3" />

              <div className="slides">
                <img src="/iphone-bg-desktop.svg" alt="iPhone 12" />
                
                <label className="card" htmlFor="sc-1" id="img-1">
                  <img src="/sc-1-desktop.svg" alt="App illustration" />
                </label>
                
                <label className="card" htmlFor="sc-2" id="img-2">
                  <img src="/sc-2-desktop.svg" alt="App illustration" />
                </label>

                <label className="card" htmlFor="sc-3" id="img-3">
                  <img src="/sc-3-desktop.svg" alt="App illustration" />
                </label>
              </div>

              <div className="desktop-text">
                <div className="info-area" id="text-slide">
                  <div>
                    <h3 className="sm-heading">Latest transaction history</h3>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
                  </div>
  
                  <div>
                    <h3 className="sm-heading">Transfer to people from your contact list</h3>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                  </div>
  
                  <div>
                    <h3 className="sm-heading">See your transaction history</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sapiente sit eligendi placeat ullam perferendis distinctio ipsa veritatis incidunt ea!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowTo