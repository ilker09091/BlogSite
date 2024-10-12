import React, { useState } from 'react';
import Logo from '../assets/logo.jpeg';

export default function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')

  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/XcwQ_hh_SDS", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
      }
      else if(response.code === 422){
        setError(response.message)
      }
      else {
        setError(response.message)
      }
    })
    .catch(error => {
      setError(error.message ? error.message : error);
    });
  }


  return (
    <div>
        <h2>Contact</h2>
          <div className='contact-form'>
        
        <form onSubmit={(e) => onSubmit(e)}>
    
    <div className="formcarry-block">
      <label htmlFor="name">Full Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />
    </div>
    
    <div className="formcarry-block">
      <label htmlFor="email">Your Email Address</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
    </div>
    
    <div className="formcarry-block">
      <label htmlFor="message">Your message</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
    </div>
    
    <div className="formcarry-block">  
      <button type="submit">Send</button>
    </div>
  </form>
  <img src={Logo} alt="" />
    </div>
    </div>
    
  )
}