import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddButton.css';

const AddButton = ({ icon, title, to, params }) => {
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
    <div className="add-cardd" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img className='icona' src={icon} alt={`${title} icon`} />
      <h1 className="addd-title">{title}</h1>
    </div>
  );
};

export default AddButton;
