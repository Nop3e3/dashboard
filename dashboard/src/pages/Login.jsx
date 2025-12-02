import React from 'react';
import './Login.css'; 
import Logo from '../Assets/logo.svg';
import Eye from '../Assets/clarity_eye-hide-line.svg' 
import PinkButton from '../Main-Components/PinkButton';
import Logininput from '../login-content/Logininput';
const Login = () => {
    return ( 
    <div className='login'>
<div className='logincon'><div className='wlcmcon'>
<img src={Logo} alt="description" />
<div className='ttl'>Welcome back</div>
<div className='ttlcap'>Please fill to login</div>
</div><Logininput
  title="Email"
   placeholder="username@gmail.com"
  type="text"
/>
<Logininput
  title="Password"
  placeholder="Enter your Password"
  type="text"
   image={Eye}
/>
<PinkButton
 content={<p>Password</p>}/>
</div>


    </div> );
}
 
export default Login;