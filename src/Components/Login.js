import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
    const data = await response.json();
    if(data.user){
      localStorage.setItem('token',data.user)
      alert("login success")
      navigate('/dashboard');

    }else if(data.user === false){
         alert("incorrect user credentials")
         navigate('/login')
    }
    console.log(data.user,"user");
  }

  return (
    <div>
      <div className="container">
        <h1 className="d-flex justify-content-center">Register</h1>
        <form className="w-50 mx-auto" onSubmit={onLoginUser}>
          
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
