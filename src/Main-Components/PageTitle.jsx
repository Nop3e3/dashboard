import React, { useState } from 'react';
import './PageTitle.css';
import notification from '../Assets/notification.svg';
import dots from '../Assets/dots.svg';
import Searchicon from '../Assets/search-normal.svg'

const PageTitle = ({ title, content }) => { 
    const [query, setQuery] = useState("");

    return ( 
        <div className="Pagetitle">

            <div className="titles">
                <h1 className="Page-title">{title}</h1>
                <p className="Page-caption">{content}</p>
            </div>

     <div className="Farright">
            <div className="search-container">
                   <img src={Searchicon} alt="" />

                <input 
                    type="text"
                    placeholder="Search for anything..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

 
            <div className="icons">
                <img src={notification} alt="" />
                <img src={dots} alt="" />
            </div>
</div>
        </div>
    );
}
 
export default PageTitle;
