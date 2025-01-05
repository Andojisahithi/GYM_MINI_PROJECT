// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Styles/SignUp.css'

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

// // 
  


//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/signup", {
//         name,
//         email,
//         password,
//       });
//       // Redirect to Fitness Registration on successful signup
//       navigate("/fitnessRegistration");
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2  className="signup-header">Signup</h2>
//       <form className="signup_form" onSubmit={handleSignup}>
//         <label>Username:</label>
//         <input
//           type="text"
//           className="signup_input_field"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <label>Email Id:</label>
//         <input
//           type="email"
//           className="signup_input_field"
//           placeholder="Enter email id"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           className="signup_input_field"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="signup_btn">Signup</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Signup;

















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Styles/SignUp.css';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });
      
      // Extract userId from the response
      const { userId } = response.data;

        // Store userId in local storage
        localStorage.setItem("userId", userId);

      // Redirect to the Fitness Registration page with userId in the URL
      navigate(`/fitnessRegistration/${userId}`);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Signup</h2>
      <form className="signup_form" onSubmit={handleSignup}>
        <label>Username:</label>
        <input
          type="text"
          className="signup_input_field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email Id:</label>
        <input
          type="email"
          className="signup_input_field"
          placeholder="Enter email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          className="signup_input_field"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup_btn">Signup</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Signup;
