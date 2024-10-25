import React from 'react'
import FaqList from './FaqList'
import ContactCard from './ContactCard'

function Faq() {
  return (
    <>
      <section id="faq-section">
        <div className="faqs">
          <div className="faq-intro p-tb-1">
            <h2 className="m-heading p-tb-1">Any questions?<br />Check out the FAQs</h2>
            <p className="l-font">Still have unanswered questions and need to get in touch?</p>
          </div>
          
          <FaqList />
      
          <div className="btn-mobile">
            <button className="contact-btn">Contact us now</button>
          </div>
            
          <div id="contact-info-section">
            <ContactCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq