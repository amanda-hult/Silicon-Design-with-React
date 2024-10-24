import React from 'react'
import FaqList from './FaqList'

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
            <div className="contact-info p-tb-1">
              <div className="contact-phone">
                <a href="#" className="phone-icon">
                  <i className="fa-solid fa-phone-volume fa-xl fa-hover-hidden"></i>
                  <i className="fa-solid fa-phone-volume fa-shake fa-xl fa-hover-show"></i>
                </a>
                <p className="s-font">Still have questions?</p>
                <a href="#">Contact us <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
              </div>

              <div className="contact-msg">
                <a href="#" className="msg-icon">
                  <i className="fa-solid fa-comment-dots fa-2xl fa-hover-hidden"></i>
                  <i className="fa-solid fa-comment-dots fa-bounce fa-2xl fa-hover-show"></i>
                </a>
                <p className="s-font">Don't like phone calls?</p>
                <a href="#">Contact us <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq