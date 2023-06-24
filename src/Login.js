import React, { useState } from 'react';
import  './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const loginData = {
      username: username,
      password: password
     
    };
    if(username === " " || password === " "){
        setError("all fields are required!!");
    }

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        // Add your logic here to handle successful login and redirect to the profile page
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
      console.log(username,password)
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <label htmlFor="username">Username</label>
      <br />
      <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      <br />
      <label id='labelpswd' htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button id='btn' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
