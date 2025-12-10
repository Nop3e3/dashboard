import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className="project-card">
     
      <div 
        className="rank-box" 
        style={{ backgroundColor: props.rankBgColor }}
      >
        <span 
          className="rank-number"
          style={{ color: props.rankTextColor }}
        >
          {props.rank}
        </span>
      </div>

      <div className="card-content">
        <h3 className="card-titleee">{props.title}</h3>
        
        <div className="tags-container">
          {props.tag1Text && (
            <span className={`tag ${props.tag1Color}`}>
              {props.tag1Text}
            </span>
          )}

          {props.tag2Text && (
            <span className={`tag ${props.tag2Color}`}>
              {props.tag2Text}
            </span>
          )}
        </div>
      </div>


      <div className="card-score">
        {props.score}
      </div>
    </div>
  );
};

export default ProjectCard;