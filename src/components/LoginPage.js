import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { findUser } from './userData';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const user = findUser(username, password);

        if (user) {
            navigate('/app-store');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Welcome to AppVault</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <div className="button-container">
                        <button type="submit">Sign In</button>
                        <button type="reset" onClick={() => {
                            setUsername('');
                            setPassword('');
                            setError('');
                        }}>Reset</button>
                    </div>
                </form>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register here</Link></p> 
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
