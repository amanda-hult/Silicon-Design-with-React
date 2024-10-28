import React from 'react'
import SocialIcons from './SocialIcons'
import DirectionCard from './DirectionCard'

function Directions() {
  return (
    <>
      <section>
        <div className="wrapper">
          <h2 className="center xl-heading p-tb-2 hide-desktop">Find Us</h2>
          <div className="google-map hide-mobile">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.2533020472165!2d-95.40923518746997!3d29.770316331400366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0b2dbc150fb%3A0xbfcd05fe80d296f1!2s4517%20Washington%20Ave%2C%20Manchester%2C%20Kentucky%2039495%2C%20USA!5e0!3m2!1ssv!2sse!4v1729677830060!5m2!1ssv!2sse" width="600" height="450" style={{ border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
          <div className="direction-container">
            <DirectionCard />
          </div>

          <SocialIcons />
        </div>
      </section>
    </>
  )
}

export default Directions