import React from 'react';
import './ArrowButton.css';

const ArrowButton = ({ text ,  icon }) => {
  


  return (
    <button className="view-all-btn" >
      <p className="btn-text">{text}</p>
      
      <div className="icon-wrapper">
     <img src={icon} />
      </div>
    </button>
  );
};

export default ArrowButton;