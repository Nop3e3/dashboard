import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PinkButton.css';

const PinkButton = ({ content, to, params, onClick, type = "button" }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // 1️⃣ Run parent onClick FIRST (save, submit, etc.)
    if (onClick) {
      onClick(e);
    }

    // 2️⃣ Navigate ONLY if `to` is provided
    if (to) {
      navigate(to, { state: params });
    }
  };

  return (
    <button
      type={type}
      className="pinkbutton"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default PinkButton;

