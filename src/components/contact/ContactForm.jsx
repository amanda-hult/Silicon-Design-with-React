import React, { useState } from 'react'

function ContactForm() {

  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const [formFields] = useState([
    {
      id: 1,
      label: 'Full name',
      for: 'name',
      type: 'text',
      name: 'fullName',
      placeholder: 'Your name',
    },
    {
      id: 2,
      label: 'Email address',
      for: 'email',
      type: 'email',
      name: 'email',
      placeholder: 'Your email',
    },
    {
      id: 3,
      label: 'Specialist',
      for: 'specialist-dropdown',
      type: 'select',
      name: 'specialist',
      placeholder: '<Select>',
      options: [
        { value: 'default', label: '<Select>'},
        { value: 'finance', label: 'Finance'},
        { value: 'it', label: 'IT-Support'},
        { value: 'other', label: 'Other'},
      ]
    }
  ]);

  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName') {
      const nameRegex = /^[A-Öa-ö\s-]{2,}$/;
      error = value.trim() === ''
      ? 'Full name is required.'
      : !nameRegex.test(value)
      ? 'Full name needs to be at least two characters.'
      : '';
    } else if (name === 'email') {
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;
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

    try {
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
        console.error("Form submission failed:", errorData)
      }
    } catch (error) {
      console.log("Network error", error);
    }
  }

  return (
    <form className="appointment-form space-y-2" data-aos="fade-left" data-aos-duration="500" onSubmit={handleSubmit} noValidate>
      <h2 className="center l-heading">Get Online Consultation</h2>
      {formFields.map((field) => (
        <div key={field.id} className='form-group'>
          <label className='bold' htmlFor={field.for}>{field.label}</label>
          {field.type === 'select' ? (
            <select id={field.for} name={field.name} value={formData[field.name]} onChange={handleChange} className="contact-form-input opacity80" required>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
               ))}
            </select>
          ) : (
          <input type={field.type} id={field.for} name={field.name} value={formData[field.name]} onChange={handleChange} className="contact-form-input" placeholder={field.placeholder} required />
          )}
          <p className="invalid-input">{errors[field.name] && errors[field.name]}</p>
        </div>
      ))}

      {submitted && <p className="center">Thank you for your request!</p>}
      
      <button id="submit-btn" className="submit-btn" type="submit">Make an appointment</button>
    </form>
  )
}

export default ContactForm