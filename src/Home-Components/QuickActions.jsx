import React from 'react';
import './QuickActions.css';
import addicon from '../Assets/add_2.svg'
const QuickActions = ({ text  }) => {
  


  return (
    <div className="qactionbutton" >
      <p className="btn-textt">{text}</p>
      
     <img src={addicon} />
     
    </div>
  );
};

export default QuickActions;