import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { addUser } from './userData';
import './RegisterPage.css';

function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        if (!username || !password || !email) {
            setError('All fields are required');
            return;
        }

        // Save user to localStorage
        addUser(username, password);
        navigate('/login');
    };

    return (
        <div className="register-page">
            <div className="register-card">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
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
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <button type="submit">Register</button>
                        <button type="reset" onClick={() => {
                            setUsername('');
                            setPassword('');
                            setEmail('');
                            setError('');
                        }}>Reset</button>
                    </div>
                </form>
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login here</Link></p> 
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
