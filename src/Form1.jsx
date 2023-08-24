
import React, { useState } from 'react';

const Form1 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const nameValue = (event) => {
        setName(event.target.value);
    };
    const emailValue = (event) => {
        setEmail(event.target.value);
    };
    const passwordValue = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefualt();
   
    }

    
  return (
    <div className='div-form'>
        <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input type="text" value={name}       placeholder='Username' onChange={nameValue} />
        <input type="email" value={email}  placeholder='Email' onChange={emailValue} />
        <input type="password" value={password} placeholder='Password' onChange={passwordValue} />
        </form>
        <div>
            <h5>Form Value:</h5>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    </div>
  )
}

export default Form1;