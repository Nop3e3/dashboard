import React from "react";
import "./MessageCard.css";

const MessageCard = ({ 
  image, 
  name, 
  time, 
  title, 
  message, 
  status, 
  statusBg = "rgba(179, 255, 244, 0)",   
  statusColor = "#000"    
}) => {
  return (
    <div className="message-card">

      <img src={image} alt={name} className="message-image" />

      <div className="message-content">
        <div className="message-header">
          <h3 className="message-name">{name}</h3>
          <span className="message-time">{time}</span>
        </div>

        <h4 className="message-title">{title}</h4>
       <div className="messagestatus"> <p className="message-text">{message}</p>

        {/* Customizable badge */}
        <span 
          className="message-status"
          style={{
            backgroundColor: statusBg,
            color: statusColor
          }}
        >
          {status}
        </span></div>
      </div>

    </div>
  );
};

export default MessageCard;
