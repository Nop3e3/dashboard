import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ 
  coverImage, 
  menuIcon, 
  viewIcon, 
  title, 
  viewCount,
  // Individual props for tags instead of an array
  tag1Label,
  tag1Class,
  tag2Label,
  tag2Class
}) => {
  return (
    <div className="card-wrapper-bg">
      <div className="project-card">

        <div className="card-header">
          
   <div className='rowwas'>
    <h2 className="card-title">{title}</h2>
 <div className='rowwa'>  <div className="tags-containerr">
      
            {tag1Label && (
              <span className={`tag ${tag1Class}`}>
                {tag1Label}
              </span>
            )}

            {tag2Label && (
              <span className={`tag ${tag2Class}`}>
                {tag2Label}
              </span>
            )}
          </div>
          
          <button className="menu-btn">
            <img src={menuIcon} alt="Menu" className="icon-img menu-icon" />
          </button></div>
        </div>
        
</div>
        <div className="banner-image-wrapper">
          <img 
            src={coverImage}
            alt={title} 
            className="banner-image" 
          />
        </div>

      
        <div className="card-footer">
          <div className="view-count-wrapper">
            <img src={viewIcon} alt="Views" className="icon-img eye-icon" />
            <span className="count-text">{viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;