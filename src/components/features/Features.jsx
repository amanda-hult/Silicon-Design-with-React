import React from 'react'
import FeatureItems from './FeatureItems'
import PartnerLogos from './PartnerLogos'

function Features() {
  return (
    <>
      <section id="app-features">
        <PartnerLogos />

        <div className="feature-container">
          
          <img className="app-on-iphone" src="/app-features.svg" />
          <div className="features-intro">
            <h2 className="m-heading p-tb-1">App Features</h2>
            <p className="l-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>

          <FeatureItems />
          
        </div>
      </section>
    </>
  )
}

export default Features