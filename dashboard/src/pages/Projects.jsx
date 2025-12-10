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
import Img1 from '../Assets/img1.png';
import menuDots from '../Assets/menudots.svg'
import Img2 from '../Assets/img2.png';
import Img3 from '../Assets/img3.png';
import Img4 from '../Assets/img4.png';
import Img5 from '../Assets/img5.png';
const Projects = () => {
    return ( 
    <div className='mainconj'>
<Sidebar/>
<div className='mainpage page'>
    <Pagetitle
      title="Project Mangement"
        /> 
         <div className="nav-container">
      <div className='stuff'>
      {/* 1. Active Tab (Hardcoded 'active' class) */}
      <button className="nav-btn active">
        UX UI
      </button>

      {/* 2. Inactive Tab */}
      <button className="nav-btn">
        Graphic design
      </button>

      {/* 3. Inactive Tab */}
      <button className="nav-btn">
        AR
      </button>

      {/* 4. Inactive Tab */}
      <button className="nav-btn">
        3d Modeling
      </button>

    </div>

    <div className='icons'>
        <img src={addicon} alt="" />
           <img src={edit} alt="" />
    </div>
        </div> 
        <div className="toolbar-container">
      {/* Left Side: View Toggles */}
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

      {/* Right Side: Actions */}
      <div className="right-section">
        <button className="btn-primary">
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
    <div>
      <ProjectCard
        // 1. Text Props
        title="Verro: AI Art Mentor"
        viewCount={12}

        // 2. Image/Icon Props
        coverImage={Img1}
        menuIcon={menuDots}
        viewIcon={eyeIcon}

        // 3. Tag Props (Individual, no arrays)
        tag1Label="UX Design"
        tag1Class="tag-design"    /* Matches the CSS class for yellow */
        
        tag2Label="UX Research"
        tag2Class="tag-research"  /* Matches the CSS class for pink */
      />



         <ProjectCard
        // 1. Text Props
        title="Sugar Pop: Pop Culture E-Magazine"
        viewCount={12}

        // 2. Image/Icon Props
        coverImage={Img2}
        menuIcon={menuDots}
        viewIcon={eyeIcon}

        // 3. Tag Props (Individual, no arrays)
        tag1Label="UX Design"
        tag1Class="tag-design"    /* Matches the CSS class for yellow */
        
        tag2Label="UX Research"
        tag2Class="tag-research"  /* Matches the CSS class for pink */
      />


      
         <ProjectCard
        // 1. Text Props
        title="Giza Zoo website"
        viewCount={12}

        // 2. Image/Icon Props
        coverImage={Img3}
        menuIcon={menuDots}
        viewIcon={eyeIcon}

        // 3. Tag Props (Individual, no arrays)
        tag1Label="UX Design"
        tag1Class="tag-design"    /* Matches the CSS class for yellow */
        
        tag2Label="UX Research"
        tag2Class="tag-research"  /* Matches the CSS class for pink */
      />



          
         <ProjectCard
        // 1. Text Props
        title="Heka: Smart TV"
        viewCount={12}

        // 2. Image/Icon Props
        coverImage={Img4}
        menuIcon={menuDots}
        viewIcon={eyeIcon}

        // 3. Tag Props (Individual, no arrays)
        tag1Label="UX Design"
        tag1Class="tag-design"    /* Matches the CSS class for yellow */
        
        tag2Label="UX Research"
        tag2Class="tag-research"  /* Matches the CSS class for pink */
      />
          <ProjectCard
        // 1. Text Props
        title="East Sate : Real Estate Web"
        viewCount={12}

        // 2. Image/Icon Props
        coverImage={Img5}
        menuIcon={menuDots}
        viewIcon={eyeIcon}

        // 3. Tag Props (Individual, no arrays)
        tag1Label="UX Design"
        tag1Class="tag-design"    /* Matches the CSS class for yellow */
        
        tag2Label="UX Research"
        tag2Class="tag-research"  /* Matches the CSS class for pink */
      />
    </div>


    <div className="pagination-container">
      <button className="pagination-arrow" aria-label="Previous Page">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="pagination-numbers">
        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <button className="page-number">4</button>
        <button className="page-number">5</button>
        <button className="page-number">6</button>
        <button className="page-number">7</button>
        <button className="page-number">8</button>
      </div>

      <button className="pagination-arrow" aria-label="Next Page">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
 </div> 
         
       
         </div> );
}
 
export default Projects;