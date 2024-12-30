import React from 'react';
import './AppCard.css';
import '../App.css';

const AppCard = ({ appName, appDescription, appIcon, appLink }) => {
    return (
        <div className="app-card">
            <img src={appIcon} alt={`${appName} icon`} className="app-icon" />
            <h3>{appName}</h3>
            <p>{appDescription}</p>
            <a href={appLink} target="_blank" rel="noopener noreferrer">
                <button className="download-button">Download</button>
            </a>
        </div>
    );
};

export default AppCard;