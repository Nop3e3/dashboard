// JSX Component (Props-Based)
import React from "react";
import "./StatsCard.css";

export default function StatsCard({
  title,
  value,
  change,
    redChange,
  changeLabel,
  redLabel,
  icon,
  iconAlt = "icon",
}) {
  return (
    <div className="stats-card">
      <div>
        <p className="stats-card-title">{title}</p>
        <h2 className="stats-card-value">{value}</h2>
      <div className="rowwww"> <p className="stats-card-change">
          <span>{change}</span> {changeLabel}
        </p>
        <p className="red"> <span>{redChange}</span>{redLabel}</p></div>
      </div>

      <div className="stats-card-icon-box">
        {icon && <img src={icon} alt={iconAlt} />}
      </div>
    </div>
  );
}

