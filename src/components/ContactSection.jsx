import React from 'react'

function ContactSection() {
  return (
    <>
      <section className="contact-us-section">
        <div className="hero-wrapper">

          <h1 className="xl-heading p-t-2 contact-header">Contact Us</h1>
          <div>
            <div className="contact-container">
              <div className="contact-card">
                <div className="contact-icon">
                  <img src="/envelope.svg" />
                </div>
                <div>
                  <h2 className="sm-heading">Email us</h2>
                  <p className="hide-mobile p-tb-1">Please feel free to drop us a line. We will <br className="hide-mobile" />respond as soon as possible.</p>
                  <p className="accent p-tb-1 bold">Leave a message <span><i className="fa-regular fa-arrow-right"></i></span></p>
                </div>
              </div>

                
              <div className="contact-card">
                <div className="contact-icon">
                  <img src="/add-group.svg" />
                </div>
                <div>
                  <h2 className="sm-heading">Careers</h2>
                  <p className="hide-mobile p-tb-1">Sit ac ipsum leo lorem magna nunc mattis <br className="hide-mobile" />maecenas non vestibulum.</p>
                  <p className="accent p-tb-1 bold">Send an application <span><i className="fa-regular fa-arrow-right"></i></span></p>
                </div>    
              </div>
            </div>
          </div>

          <div className="form-container">
            <form className="appointment-form space-y-2" noValidate>
              <h2 className="center">Get Online Consultation</h2>
              <div>
                <label htmlFor="name" className="form-label">Full name</label>
                <input type="text" id="name" className="form-input" placeholder="Your name" onKeyUp="hideError(this)" required />
                <p className="invalid-input">Error message</p>
              </div>

              <div>
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" id="email" className="form-input" placeholder="Your email" onKeyUp="hideError(this)" required />
                <p className="invalid-input">Error message</p>
              </div>

              <div>
                <label htmlFor="specialist-dropdown" className="form-label">Specialist</label>
                <select id="specialist-dropdown" name="title" className="form-input" required>
                  <option className="specialist" value="default">&lt;Select&gt;</option>
                  <option className="specialist" value="finance">Finance</option>
                  <option className="specialist" value="it">IT-support</option>
                  <option className="specialist" value="other">Other</option>
                </select>
                <p className="invalid-input">Error message</p>
              </div>
              <p className="hide">Thank you for your request!</p>
              
              <button id="submit-btn" className="submit-btn" type="submit">Make an appointment</button>
                
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactSection