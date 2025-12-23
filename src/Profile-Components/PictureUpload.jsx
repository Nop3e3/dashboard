import React from 'react';
import './PictureUpload.css'; // Make sure to link the CSS file

const PictureUpload = ({ onClick }) => {
  return (
    <div className="image-input-container" onClick={onClick}>
      <div className="add-icon-box">
        {/* Simple representation of the plus icon */}
        <span className="plus-horizontal"></span>
        <span className="plus-vertical"></span>
      </div>
      <div className="input-area">
        <span className="add-image-text">Add Image</span>
        <div className="input-line"></div>
      </div>
    </div>
  );
};

export default PictureUpload;