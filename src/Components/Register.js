import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });
    const result = await response.json();
    if(result.status === 'ok'){
      navigate('/login')
    } else{
      alert("user already registered")
    }

    console.log(result);
  }
  return (
    <div>
      <div className="container">
        <h1 className="d-flex justify-content-center">Register</h1>
        <form className="w-50 mx-auto" onSubmit={onRegisterUser}>
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
