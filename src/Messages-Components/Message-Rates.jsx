import React, { useState } from 'react';
import './Message-Rates.css';
import notification from '../Assets/notification.svg';
import dots from '../Assets/dots.svg';
import Searchicon from '../Assets/search-normal.svg'

const Messagerates = ({ title, content }) => { 
    const [query, setQuery] = useState("");

    return ( 
       <div className="Message-rates">
        <p className="Category">{content}</p>
<h1 className="Number">{title}</h1>

       </div>
    );
}
 
export default Messagerates;
