import React from 'react';
import './Profile.css';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar'; 

const Profile = () => {
    return ( 
    <div className='mainconj'>
<Sidebar/>
<div className='mainpage1'>
    <Pagetitle
      title="Profile"
        /> 
     <div className='theactualcontent'>  
         <div className='ProfileContent'>
            <div className='Welcome'>
                Welcome back, Salma
                <div className='captionn'>Tue, 07 Nov 2025</div>
            </div>
        </div></div>
</div>
</div>

   );
}
 
export default Profile;