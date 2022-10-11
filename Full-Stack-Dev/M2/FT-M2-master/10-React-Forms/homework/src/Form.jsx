import React, { useState } from 'react';

export const validate = (input) =>{
  let errors = {};
  if (!input.username) {
      errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
  }

  if (!input.password) {
      errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
      errors.password = 'Password is invalid';
  }
  
  return errors;
};

export default function  Form() {
  // AGREGAMOS ESTADOS
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form>
      <div>
        <label htmlFor='username'>Username:</label>
        <input 
          className={errors.username && 'danger'}
          type="text"
          name="username"
          onChange={handleInputChange}
          value={input.username} 
        />
        {errors.username && (<p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input 
          className={errors.password && 'danger'} 
          type="password" 
          name="password" 
          onChange={handleInputChange} 
          value={input.password} 
        />
        {errors.password && (<p className="danger">{errors.password}</p>)}
      </div>
      <div> 
        <input 
          type="submit" 
          name="submit" 
          value='Submit'
          disabled={Object.keys(errors).length !== 0 || !input.password || !input.username}
        />
      </div>
    </form>
  )
}
