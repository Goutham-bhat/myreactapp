import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const registerUser = (username, password, email) => {
        setUsers([...users, { username, password, email }]);
    };

    const validateUser = (username, password) => {
        return users.some(user => user.username === username && user.password === password);
    };

    return (
        <UserContext.Provider value={{ users, registerUser, validateUser }}>
            {children}
        </UserContext.Provider>
    );
};
