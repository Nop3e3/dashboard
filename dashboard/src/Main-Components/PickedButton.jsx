import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PickedButton.css';

const MenuButton = ({ icon, title, to, params }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (params) {
      // Navigate with params as search query
      const query = new URLSearchParams(params).toString();
      navigate(`${to}?${query}`);
    } else {
      navigate(to);
    }
  };

  return (
    <div className="dashboard-cardd" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={icon} alt={`${title} icon`} />
      <h1 className="dashboard-titlee">{title}</h1>
    </div>
  );
};

export default MenuButton;
