import React, { useState, useRef } from 'react';
import './TrafficAnalytics.css';

// 1. DATA CONFIGURATION
const dataMap = {
  Today: [
    { label: '8am', value: 120 }, { label: '10am', value: 180 }, { label: '12pm', value: 140 },
    { label: '2pm', value: 250 }, { label: '4pm', value: 310 }, { label: '6pm', value: 430 },
    { label: '8pm', value: 280 }
  ],
  Week: [
    { label: 'Fri', value: 130 }, { label: 'Sat', value: 185 }, { label: 'Sun', value: 145 },
    { label: 'Mon', value: 305 }, { label: 'Tues', value: 280 }, { label: 'Wed', value: 440 },
    { label: 'Thurs', value: 290 }
  ],
  Month: [
    { label: 'Week 1', value: 200 }, { label: 'Week 2', value: 400 }, 
    { label: 'Week 3', value: 300 }, { label: 'Week 4', value: 450 }
  ]
};

const TrafficAnalytics = () => {
  const [activeTab, setActiveTab] = useState('Week');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [hoverData, setHoverData] = useState(null);
  
  // Chart dimensions (internal SVG units, not pixels)
  const width = 600;
  const height = 300;
  const padding = { top: 20, bottom: 40, left: 0, right: 0 };
  const graphHeight = height - padding.top - padding.bottom;
  const maxY = 500; // The top value of the Y axis

  const currentData = dataMap[activeTab];

  // 2. HELPER: Calculate X and Y coordinates for a data point
  const getX = (index) => (index / (currentData.length - 1)) * width;
  const getY = (value) => padding.top + (graphHeight - (value / maxY) * graphHeight);

  // 3. GENERATE SVG PATHS
  // The line points string: "x1,y1 x2,y2 ..."
  const points = currentData.map((d, i) => `${getX(i)},${getY(d.value)}`).join(' ');
  
  // The area fill path: starts at bottom left, goes through points, ends at bottom right
  const areaPath = `
    M 0,${height - padding.bottom}
    L ${points.replace(/ /g, ' L ')}
    L ${width},${height - padding.bottom}
    Z
  `;

  // 4. MOUSE INTERACTION
  const svgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    // Map mouse X pixel position to internal SVG coordinate
    const svgX = (mouseX / rect.width) * width;
    
    // Find closest data point index
    const totalPoints = currentData.length;
    let index = Math.round((svgX / width) * (totalPoints - 1));
    
    // Clamp index to ensure it's valid
    if (index < 0) index = 0;
    if (index > totalPoints - 1) index = totalPoints - 1;

    setHoverData({
      x: getX(index),
      y: getY(currentData[index].value),
      value: currentData[index].value,
      label: currentData[index].label
    });
  };

  const handleMouseLeave = () => setHoverData(null);

  return (
    <div className="page-container">
      <div className="analytics-card">
        
        {/* Header */}
        <div className="card-header">
          <h2 className="card-title">Traffic Analytics</h2>
          <div className="controls">
            <button className={`control-btn ${activeTab === 'Today' ? 'active' : ''}`} onClick={() => setActiveTab('Today')}>Today</button>
            <button className={`control-btn ${activeTab === 'Week' ? 'active' : ''}`} onClick={() => setActiveTab('Week')}>Week</button>
            <div className="dropdown-container">
              <button 
                className={`control-btn dropdown-btn ${activeTab === 'Month' ? 'active' : ''}`}
                onClick={() => { setActiveTab('Month'); setDropdownOpen(!isDropdownOpen); }}
              >
                Month <span style={{fontSize:'10px', marginLeft:'5px'}}>▼</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="chart-wrapper">
          {/* Y Axis Labels (Static HTML) */}
          <div className="y-axis-labels">
            {[400, 300, 200, 100, 0].map(val => (
              <div key={val} className="y-label" style={{ bottom: `${(val / maxY) * 100}%` }}>
                {val === 0 ? '0' : val}
              </div>
            ))}
          </div>
<div className="svg-container">
  
  {/* Tooltip (No changes here) */}
  {hoverData && (
    <div 
      className="custom-tooltip"
      style={{ 
        left: `${(hoverData.x / width) * 100}%`, 
        top: `${(hoverData.y / height) * 100}%` 
      }}
    >
      <div className="tooltip-content">{hoverData.value.toLocaleString()}</div>
      <div className="tooltip-arrow"></div>
    </div>
  )}

  {/* NEW: The Hover Dot (Moved out of SVG to keep it round) */}
  {hoverData && (
    <div 
      className="hover-point"
      style={{ 
        left: `${(hoverData.x / width) * 100}%`, 
        top: `${(hoverData.y / height) * 100}%` 
      }}
    />
  )}

  <svg 
    ref={svgRef}
    viewBox={`0 0 ${width} ${height}`} 
    className="chart-svg"
    preserveAspectRatio="none"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    {/* ... (defs, grid lines, path, and polyline remain exact same) ... */}
    
    <defs>
      <linearGradient id="gradientFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#9b2c48" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#9b2c48" stopOpacity="0" />
      </linearGradient>
    </defs>

    {[100, 200, 300, 400].map(val => (
      <line 
        key={val}
        x1="0" y1={getY(val)} x2={width} y2={getY(val)} 
        stroke="#f0f0f0" strokeWidth="1"
      />
    ))}

    <path d={areaPath} fill="url(#gradientFill)" stroke="none" />

    <polyline 
      points={points} 
      fill="none" 
      stroke="#9b2c48" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* DELETED: The <circle> tag is removed from here */}
    
  </svg>

  {/* ... (X axis labels remain same) */}
  <div className="x-axis-labels">
    {currentData.map((d, i) => (
      <div key={i} className="x-label" style={{ left: `${(i / (currentData.length - 1)) * 100}%` }}>
        {d.label}
      </div>
    ))}
  </div>
</div>
        </div>

      </div>
    </div>
  );
};

export default TrafficAnalytics;