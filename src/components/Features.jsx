import React from 'react'

function Features() {
  return (
    <>
      <section id="app-features">
        <div className="logos">
          <img className="logo p-1" src="public/logoipsum1.svg" />
          <img className="logo p-1" src="public/logoipsum2.svg" />
          <img className="logo p-1" src="public/logoipsum3.svg" />
          <img className="logo p-1" src="public/logoipsum4.svg" />
          <img className="logo logo-desktop p-1" src="public/logoipsum5.svg" />
          <img className="logo logo-desktop p-1" src="public/logoipsum6.svg" />
        </div>

        <div className="feature-container">
          <img className="app-on-iphone" src="public/app-features.svg" />
          <div className="features-intro">
            <h2 className="m-heading p-tb-1">App Features</h2>
            <p className="l-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>
          <div className="feature">
            <img src="public/payment-icon.svg" alt="Payment icon" />
            <div>
              <h3 className="s-heading">Easy Payments</h3>
              <p className="m-font">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
          </div>

          <div className="feature">   
            <img src="public/shield-icon.svg" alt="Shield icon" />
            <div>
              <h3 className="s-heading">Data Security</h3>
              <p className="m-font">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>
          </div>

          <div className="feature"> 
            <img src="public/statistics-icon.svg" alt="Statistics icon" />
            <div>
              <h3 className="s-heading">Cost Statistics</h3>
              <p className="m-font">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
          </div>

          <div className="feature"> 
            <img src="public/support-icon.svg" alt="Support icon" />
            <div>
              <h3 className="s-heading">Support 24/7</h3>
              <p className="m-font">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
          </div>

          <div className="feature">   
            <img src="public/cashback-icon.svg" alt="Cashback icon" />
            <div>
              <h3 className="s-heading">Regular Cashback</h3>
              <p className="m-font">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
          </div>

          <div className="feature">   
            <img src="public/happy-icon.svg" alt="Happyface icon" />
            <div>
              <h3 className="s-heading">Top Standards</h3>
              <p className="m-font">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features