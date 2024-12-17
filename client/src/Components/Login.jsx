
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './Styles/Login.css';
import Signup from "./Signup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true); // New state to control login visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // Store the JWT token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to Fitness Registration on successful login
      navigate("/fitnessRegistration");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false); // Hide the login form when signup modal opens
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true); // Show the login form again when signup modal closes
  };

  const handleCloseSignUpForm = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    navigate('/')
};

  return (
    <div className="login-container">
      {isLoginOpen && (
        <>
          <h2 className="login-header">Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <label>Email Id:</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login_btn">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p>Don't have an account? <Link className="signup_button" onClick={handleOpenSignUp}>Sign Up</Link></p>
        </>
      )}
      {isSignUpOpen && (
        <div className="signup_modal_overlay" onClick={handleCloseSignUp}>
          <div className="signup_modal_content" onClick={(e) => e.stopPropagation()}>
          <button className="signup_close_button" onClick={handleCloseSignUpForm}>
                &times;
            </button>
            <Signup />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
