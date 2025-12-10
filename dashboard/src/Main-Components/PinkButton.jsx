import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PinkButton.css';

const PinkButton = ({ content, to, params }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to, { state: params });
  };

  return (
    <button className="pinkbutton" onClick={handleClick}>
      {content}
    </button>
  );
};

export default PinkButton;
