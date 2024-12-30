import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

function Header({ searchTerm, onSearchChange }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleProfileClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clearing user data, tokens)
        navigate('/login'); // Redirect to the correct login route
    };

    return (
        <header className="header">
            <div className="logo">AppVault</div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search for apps" 
                    value={searchTerm} 
                    onChange={onSearchChange} 
                />
            </div>
            <div className="profile" onClick={handleProfileClick}>
                <img src={require('./logout.png')} alt="User" />
                {dropdownVisible && (
                    <div className="dropdown-menu">
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
