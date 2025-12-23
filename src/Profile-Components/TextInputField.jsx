import React from 'react';
import './TextInputField.css';
import innsert from '../Assets/Insert.svg'
const TextInputField = ({ label, placeholder, value, onChange, isTextArea = false, halfWidth = false, className = '' }) => {
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className={`text-input-field-container ${halfWidth ? 'half-width' : 'full-width'} ${className}`}>
      <label className="input-label">
        {label}
        {/* The small dark circle icon on the right */}
        <img src={innsert} alt="" />
      </label>
      <div className="input-wrapper">
        <InputComponent
          className="input-element"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          // Input specific attributes
          {...(isTextArea ? { rows: 3 } : { type: 'text' })}
        />
      </div>
    </div>
  );
};

export default TextInputField;