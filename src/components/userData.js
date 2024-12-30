export const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
};

export const addUser = (username, password) => {
    const users = getUsers();
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
};

export const findUser = (username, password) => {
    const users = getUsers();
    return users.find(user => user.username === username && user.password === password);
};
