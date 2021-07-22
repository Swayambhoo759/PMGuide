import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import Login  from './LoginForm';
import logo from './STATICS/NEW.png';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src= {logo} alt='model' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          
          <Login/>
        )}
      </div>
    </>
  );
};

export default Form;