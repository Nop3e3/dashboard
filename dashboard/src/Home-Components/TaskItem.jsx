import React from 'react';
import './TaskItem.css';

const TaskItem = ({ title, time, color, icon }) => {
  return (
    <div className="task-item">
      {/* 1. Circle Indicator */}
      <div className="circle-indicator"></div>

      {/* 2. Content */}
      <div className="task-content">
        <h3 className="task-title">{title}</h3>
        
        {/* 3. Badge */}
        <div className={`time-badge ${color}`}>
          {/* Render the imported image */}
          <img src={icon} alt="clock" className="badge-icon" />
          
          <span className="time-text">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;