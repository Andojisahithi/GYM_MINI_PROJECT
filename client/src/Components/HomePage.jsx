import React, { useState } from 'react'
import logo from '../Assets/logo.jpg'
import './Styles/Home.css'
import { Link } from 'react-router-dom'
import Login from './Login'
import gymImage from '../Assets/gym.jpg';
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';

/*Event handling for the below html code*/
const HomePage = () => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleOpenLogin = () => {
        setIsLoginOpen(true);
    };

    const handleCloseLogin = () => {
        setIsLoginOpen(false);
    };


    function calculateBMI() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
        
        if (isNaN(weight) || isNaN(height)) {
          document.getElementById('bmiResult').innerHTML = "Please enter valid numbers.";
          return;
        }
      
        const bmi = (weight / (height * height)).toFixed(2);
        let bmiCategory = '';
      
        if (bmi < 18.5) {
          bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          bmiCategory = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
          bmiCategory = 'Overweight';
        } else {
          bmiCategory = 'Obesity';
        }
      
        document.getElementById('bmiResult').innerHTML = `Your BMI is ${bmi} (${bmiCategory}).`;
      }



    /*Frontend code ,add the html code within in the div and  return*/
    return (
        <div>
            <div className='Header'>
            <div className="brand-logo">
                    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    <i>
                        <b>ZenFit</b>
                    </i>
                </div>
                <ul>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>BMI CALCULATOR</li>
                    <li>PLANS</li>
                    <li><Link to='./AboutUs'>ABOUT US</Link></li>
                    <li>CONTACT</li>
                </ul>
                <div>
                    <button onClick={handleOpenLogin}>JOIN NOW</button>
                </div>
                {isLoginOpen && (
                    <div className="modal-overlay" onClick={handleCloseLogin}>
                        <div className="popup_container" onClick={(e) => e.stopPropagation()}>
                        <button className="close_button" onClick={handleCloseLogin}>
                &times;
            </button>
                            <Login />
                        </div>
                    </div>
                )}
            </div>
            <div className='section_div_1'>
                <h1>"Step Inside, Feel the Energy, Embrace the  Change!"</h1>
                <button className='explore_btn'>Get Started</button>
            </div>
           
            <div className="section_div_2">
  <form
    onSubmit={(event) => {
      event.preventDefault(); // Prevent form submission
      calculateBMI();
    }}
  >
    <label>Weight(Kg):</label>
    <input type="text" id="weight" placeholder="Enter your weight" />

    <label>Height(cm):</label>
    <input type="text" id="height" placeholder="Enter your height" />
    <p id="bmiResult"></p>
    <button type="submit" className="calculate_btn">
      Calculate BMI
    </button>
  </form>

</div>
<div className='footer_div'>
                <div>
                    <div>
                        <img src={logo} />
                    </div>
                    <div>
                        <ul>
                        <p>Info</p>
                            <li>Newroom</li>
                            <li>Careers</li>
                            <li>FAQs</li>
                            <li>Directory</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <p>Partners</p>
                            <li>Franchsing</li>
                            <li>Investor Relations</li>
                            <li>ZenFit Purpose</li>
                            <li>ZenFit Media Network</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <p>Legal</p>

                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Do Not Sell My Info</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>
                        © 2024 ZenFit Franchising, LLC.
                    </p>
                    <ul>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-github"></i></li>
                        <li><i class="fa-brands fa-youtube"></i></li>
                    </ul>
                </div>
            </div> 

            

        </div>
    )
}

 export default HomePage
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../Assets/logo.jpg";
// import "./Styles/Home.css";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className="Header">
//       <div className="brand-logo">
//         <img src={logo} alt="Logo" />
//         <i>
//           <b>ZenFit</b>
//         </i>
//       </div>
//       <button className="join-btn">JOIN NOW</button>
//       <button className="hamburger-btn" onClick={toggleMenu}>
//         ☰
//       </button>
//       <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
//         <li>HOME</li>
//         <li>SERVICES</li>
//         <li>BMI CALCULATOR</li>
//         <li>PLANS</li>
//         <li>
//           <Link to="./AboutUs">ABOUT US</Link>
//         </li>
//         <li>CONTACT</li>
//       </ul>
//     </div>
//   );
// };

// export default NavBar;
