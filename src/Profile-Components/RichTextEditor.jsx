import React, { useState, useRef } from 'react';
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
      {label && <label>{label}</label>}

      <div className="toolbar">
        <button type="button" onClick={() => execCommand('bold')}><b>B</b></button>
        <button type="button" onClick={() => execCommand('italic')}><i>I</i></button>
        <button type="button" onClick={() => execCommand('underline')}><u>U</u></button>
        <button type="button" onClick={() => execCommand('strikeThrough')}><s>S</s></button>
        <button type="button" onClick={() => execCommand('insertOrderedList')}>OL</button>
        <button type="button" onClick={() => execCommand('insertUnorderedList')}>UL</button>
        <button type="button" onClick={() => execCommand('justifyLeft')}>Left</button>
        <button type="button" onClick={() => execCommand('justifyCenter')}>Center</button>
        <button type="button" onClick={() => execCommand('justifyRight')}>Right</button>
        <button type="button" onClick={() => {
          const url = prompt('Enter URL:');
          if (url) execCommand('createLink', url);
        }}>Link</button>
        <button type="button" onClick={() => execCommand('unlink')}>Unlink</button>
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
