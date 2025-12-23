import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuButton.css';

const MenuButton = ({ icon, title, to, params, picked }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (params) {
      const query = new URLSearchParams(params).toString();
      navigate(`${to}?${query}`);
    } else {
      navigate(to);
    }
  };

  return (
    <div
      className={`dashboard-card ${picked ? 'picked' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img 
        src={icon} 
        alt={`${title} icon`} 
        className={`dashboard-icon ${picked ? 'picked-icon' : ''}`}
      />
      <h1 className="dashboard-title">{title}</h1>
    </div>
  );
};

export default MenuButton;
