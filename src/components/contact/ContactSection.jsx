import React from 'react'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

function ContactSection() {
  return (
    <>
      <section className="contact-us-section">
        <div className="hero-wrapper">
          
          <div>
          <ContactCard />
          </div>
          <div className="form-container">
          <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection