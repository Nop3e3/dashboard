import React from 'react';
import './Projects.css';
import Sidebar from '../Main-Components/SideBar'; 
import Pagetitle from '../Main-Components/PageTitle';
import addicon from '../Assets/addicon.svg';
import edit from '../Assets/edit icon.svg';
import listIcon from '../Assets/LISTVIEW.svg';
import tableIcon from '../Assets/TABLE VIEW.svg';
import sortIcon from '../Assets/SORTBY.svg';
import filterIcon from '../Assets/FILTER.svg';
import plusIcon from '../Assets/pluss.svg';
import ProjectCard from '../Main-Components/ProjectCard';
import eyeIcon from '../Assets/eyecon.svg';
import menuDots from '../Assets/menudots.svg';

import { useNavigate } from "react-router-dom";

const Projects = ({ portfolio }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projectmanagement"); // ✅ correct + consistent path
  };

  if (!portfolio) {
    return (
      <div className="mainconj">
        <Sidebar />
        <div className="mainpage page">
          <Pagetitle title="Project Management" />
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  return ( 
    <div className='mainconj'>
      <Sidebar />

      <div className='mainpage page'>
        <Pagetitle title="Project Management" /> 

        {/* Top Navigation */}
        <div className="nav-container">
          <div className='stuff'>
            <button className="nav-btn active">UX UI</button>
            <button className="nav-btn">Graphic design</button>
            <button className="nav-btn">AR</button>
            <button className="nav-btn">3D Modeling</button>
          </div>

          <div className='icons'>
            <img src={addicon} alt="" />
            <img src={edit} alt="" />
          </div>
        </div> 

        {/* Toolbar */}
        <div className="toolbar-container">
          <div className="left-section">
            <button className="btn-pill active">
              <img src={listIcon} alt="List" className="icon" />
              List View
            </button>

            <button className="btn-ghost">
              <img src={tableIcon} alt="Table" className="icon" />
              Table
            </button>
          </div>

          <div className="right-section">
            <button className="btn-primary" onClick={handleClick}>
              <img src={plusIcon} alt="Add" className="icon" />
              New Project
            </button>

            <button className="btn-text">
              <img src={sortIcon} alt="Sort" className="icon" />
              Sort By
            </button>

            <button className="btn-text">
              <img src={filterIcon} alt="Filter" className="icon" />
              Filter
            </button>
          </div>
        </div>

        {/* Projects */}
        <div className='projectat'>
          {portfolio.map((uxprojects) => (
            <ProjectCard
              key={uxprojects.id}
              title={uxprojects.title}
              viewCount={uxprojects.view_count ?? 0}
              coverImage={uxprojects.cover_image}
              menuIcon={menuDots}
              viewIcon={eyeIcon}
              tag1Label={uxprojects.category1}
              tag1Class="tag-design"
              tag2Label={uxprojects.category2}
              tag2Class="tag-research"
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <button className="pagination-arrow" aria-label="Previous Page">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <div className="pagination-numbers">
            {[1,2,3,4,5,6,7,8].map(n => (
              <button key={n} className={`page-number ${n === 1 ? 'active' : ''}`}>
                {n}
              </button>
            ))}
          </div>

          <button className="pagination-arrow" aria-label="Next Page">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
