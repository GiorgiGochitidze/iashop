import './CSS/Registration.css'
import React, { useState } from 'react';

const Registration = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (response.ok) {
            console.log('Registration successful');
          } else {
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    return ( 
        <div className='bg'>
            <form action='http://localhost:5000/' className="loginform" method='post' onSubmit={handleSubmit}>
                <label htmlFor="firstName">სახელი:</label>
                <input
                type="text"
                name='firstName'
                id='firstName'
                placeholder='სახელი'
                value={formData.firstName}
                onChange={handleChange}
                required
                />

                <label htmlFor="გვარი">გვარი:</label>
                <input
                type="text"
                name='lastName'
                id='lastName'
                placeholder='გვარი'
                value={formData.lastName}
                onChange={handleChange}
                required
                />

                <label htmlFor="მეილი">მეილი:</label>
                <input
                type="email"
                name='email'
                id='email'
                placeholder='მეილი'
                value={formData.email}
                onChange={handleChange}
                required
                />

                <label htmlFor="პაროლი">პაროლი:</label>
                <input
                type="password"
                name='password'
                id='password'
                placeholder='პაროლი'
                value={formData.password}
                onChange={handleChange}
                required
                />

                <button type='submit'>რეგისტრაცია</button>
            </form>
        </div>
     );
}
 
export default Registration;