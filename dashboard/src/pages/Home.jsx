import React, { useState, useRef } from 'react';
import './Home.css';
import Pagetitle from '../Main-Components/PageTitle';
import Sidebar from '../Main-Components/SideBar';


const Home = () => {
    // Refs and States


    return (
        <div className='mainconj'>

<Sidebar/>
<div className='mainpage'>
    <Pagetitle
      title="Dashboard"
        />
        

        </div>    </div>
    );
};

export default Home;