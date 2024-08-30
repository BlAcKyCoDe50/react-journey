import React, { useState,useContext } from 'react';
import UserContext from '../context/UserContext';
// import UserContextProvider  from '../context/usercontextprovider';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // usercontext
    const { setUser } = useContext(UserContext); 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setUser({ username, password });
    };  // Corrected setter name

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Corrected setter name
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Corrected setter name
            />
            <button onClick={handleSubmit} className='bg-pink-500 rounded-md border-black'>Submit</button>
        </div>
    );
}

export default Login;