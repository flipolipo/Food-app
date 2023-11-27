import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [err, setError] = useState(null);
  async function loginPage(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setRedirect(true)
      });
    } else {
      alert('wrong credentials');
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className="auth">
      <h1 className="loginText">Login</h1>
      <form className="formLogin" onSubmit={loginPage}>
        <input
          className="inputlogin"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="inputlogin"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
