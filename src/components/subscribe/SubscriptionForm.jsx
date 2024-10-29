import React, { useState } from 'react'

function SubscriptionForm() {

  const [formInput, setFormInput] = useState({ email: ''});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateInput = (value) => {
    const emailRegex= /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (value.trim() === '') {
      return 'You need to enter your email address.';
    } else if (!emailRegex.test(value)) {
      return 'You need to enter a valid email address.';
    }
      return '';
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput({...formInput, [name]: value});

    const errorMessage = validateInput(value);
    setErrors(prevErrors => ({...prevErrors, [name]: errorMessage}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const emailError = validateInput(formInput.email);
    if (emailError) {
      setErrors({ email: emailError});
      return
    }

    const resp = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInput)
    });

    if (resp.ok) {
      setSubmitted(true);
      setFormInput({email: ''});
      setErrors({});
    } 
  }

  return (
    <div>
      <form className="email-input" onSubmit={handleSubmit} noValidate>
        <label htmlFor="email"></label>
        <input className="form-input" type="email" name="email" value={formInput.email} id="email" onChange={handleInput} placeholder="     &#xf003;     Your email" style={{ fontFamily: "Manrope, FontAwesome"}} required/>
        <input type="submit" value="Subscribe" />
      </form>
      <p className="invalid-input">{errors.email && errors.email}</p>
      {submitted && <p>Thank you for subscribing!</p>}
    </div>
  )
}

export default SubscriptionForm