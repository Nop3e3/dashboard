import React, { useState, useRef } from 'react';
import left from '../Assets/left.svg';
import right from '../Assets/right.svg';
import center from '../Assets/center.svg';
import './TextArea.css';

const TextAreaInput = ({ label, placeholder, value, onChange }) => {
  const editorRef = useRef(null);
  const [html, setHtml] = useState(value || '');

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    const newHtml = editorRef.current.innerHTML;
    setHtml(newHtml);
    if (onChange) onChange({ target: { value: newHtml } });
  };

  const handleInput = () => {
    const newHtml = editorRef.current.innerHTML;
    setHtml(newHtml);
    if (onChange) onChange({ target: { value: newHtml } });
  };

  return (
    <div className="text-area-input">
      {label && <label className="input-title">{label}</label>} {/* added class here */}

      <div className="toolbar">
        <button type="button" onClick={() => execCommand('bold')}><b>B</b></button>
        <button type="button" onClick={() => execCommand('italic')}><i>I</i></button>
        <button type="button" onClick={() => execCommand('underline')}><u>U</u></button>
        <button type="button" onClick={() => execCommand('strikeThrough')}><s>S</s></button>
      
        <button type="button" onClick={() => execCommand('justifyLeft')}><img src={left} alt="description" /></button>
        <button type="button" onClick={() => execCommand('justifyCenter')}><img src={center} alt="description" /></button>
        <button type="button" onClick={() => execCommand('justifyRight')}><img src={right} alt="description" /></button>
      
      </div>

      <div
        className="editor"
        ref={editorRef}
        contentEditable
        placeholder={placeholder}
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};

export default TextAreaInput;
