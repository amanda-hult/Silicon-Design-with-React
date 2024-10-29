import React, { useState } from 'react'

function ContactForm() {

  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName') {
      error = value.trim() === ''
      ? 'Full name is required.'
      : value.length < 2
      ? 'Full name needs to be at least two characters.'
      : '';
    } else if (name === 'email') {
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      error = value.trim() === ''
      ? 'Email address is required.'
      : !emailRegex.test(value)
      ? 'You need to enter a valid email address.'
      : '';
    } else if (name === 'specialist') {
      error = (value === 'default' || value === '')
      ? 'Please select a specialist'
      : '';
    }
    return error;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});

    const error = validateField(name, value);
    setErrors((prevErrors) => ({...prevErrors, [name]: error}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach((name) => {
      const error = validateField(name, formData[name]);
      if (error) newErrors[name] = error;
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const resp = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (resp.ok) {
      setSubmitted(true)
      setFormData({ fullName: '', email: '', specialist: '' })
      setErrors({});
    } else {
      const errorData = await resp.json();
    }
  }

  return (
    <form className="appointment-form space-y-2" onSubmit={handleSubmit} noValidate>
      <h2 className="center">Get Online Consultation</h2>
      <div>
        <label htmlFor="name" className="form-label">Full name</label>
        <input type="text" id="name" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" placeholder="Your name" required />
        <p className="invalid-input">{errors.fullName && errors.fullName}</p>
      </div>

      <div>
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Your email" required />
        <p className="invalid-input">{errors.email && errors.email}</p>
      </div>

      <div>
        <label htmlFor="specialist-dropdown" className="form-label">Specialist</label>
        <select id="specialist-dropdown" name="specialist" value={formData.specialist} onChange={handleChange} className="form-input" required>
          <option className="specialist" value="default">&lt;Select&gt;</option>
          <option className="specialist" value="finance">Finance</option>
          <option className="specialist" value="it">IT-support</option>
          <option className="specialist" value="other">Other</option>
        </select>
        <p className="invalid-input">{errors.specialist && errors.specialist}</p>
      </div>
      {submitted && <p className="center">Thank you for your request!</p>}
      
      <button id="submit-btn" className="submit-btn" type="submit">Make an appointment</button>
    </form>
  )
}

export default ContactForm