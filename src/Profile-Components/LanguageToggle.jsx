// ToggleSwitch.jsx
import React, { useState } from 'react';
import './LanguageToggle.css'; // New CSS file for the switch style

const ToggleSwitch = ({ initialActive = false, onToggle }) => {
  const [isActive, setIsActive] = useState(initialActive);

  const toggleSwitch = () => {
    const newState = !isActive;
    setIsActive(newState);
    // Call the parent component's handler if provided
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <button
      onClick={toggleSwitch}
      className={`switch-toggle ${isActive ? 'active' : 'inactive'}`}
      aria-checked={isActive}
      role="switch"
    >
      <span className="switch-thumb"></span>
    </button>
  );
};

export default ToggleSwitch;