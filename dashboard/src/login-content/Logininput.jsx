import React from 'react';
import './Logininput.css'; 

const Login = ({ title, image, placeholder }) => {
  return (
    <div className="section">
      <h2 className='ttle'>{title}</h2>

      <div className='input-container'>
        <input 
          type="text" 
          className="input" 
          placeholder={placeholder} 
        />

        {image && <img src={image} alt="icon" className="section-img" />}
      </div>
    </div>
  );
}

export default Login;
