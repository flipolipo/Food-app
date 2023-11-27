import React, { useState } from "react";
import { Link } from "react-router-dom";
import './register.css'

const Register = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const [err, setError] = useState(null);

async function registerPage(e){
  e.preventDefault();
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
}
  return (
    <div className="auth">
      <h1 className="registerText">Register</h1>
      <form className="formRegister" onSubmit={registerPage}>
       <input className="inputRegister"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="inputRegister"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register