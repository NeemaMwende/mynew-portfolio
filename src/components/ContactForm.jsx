import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template parameters
    const templateParams = {
      from_name: `${formData.firstname} ${formData.lastname}`,
      from_email: formData.email,
      message: formData.message,
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
    emailjs.send('service_ck8cm4a', 'template_bl0du4j', templateParams, 'AD5uQhpmjSLM8QZvv')
      .then(response => {
        alert('Form submitted successfully');
        setFormData({ firstname: '', lastname: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
        alert('Failed to submit the form');
        setIsSubmitting(false);
      });
  };

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type='text'
            name='firstname'
            placeholder='First Name'
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Message'
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'SENDING...' : 'SEND'}
        </button>
      </form>
    </div>
  );
};


export default ContactForm;
