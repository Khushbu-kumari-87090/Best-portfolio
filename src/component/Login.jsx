import React, { useState } from "react";
//import "./Login.css"; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Dummy login logic
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Know More</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      ) : (
        <p>Welcome, {formData.username}!</p>
      )}
    </div>
  );
};

export default Login;
