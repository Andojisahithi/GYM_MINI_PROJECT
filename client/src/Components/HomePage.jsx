import React, { useState } from 'react'

import logo from '../Assets/logo.jpg'
import imagess from '../Assets/imagess.png'
import backg from '../Assets/backg.png'
import card1 from '../Assets/card1.jpg'
import cardtwo from '../Assets/cardtwo.jpg'
import card3 from '../Assets/card3.jpg'
import diett from '../Assets/diett.webp'
import seco from '../Assets/seco.jpg'
import thirrd from '../Assets/thirrd.jpeg'
import bigge from '../Assets/bigge.png'
import bkkkk from '../Assets/bkkkk.png'

import gif from '../Assets/gif.png'


import mainpic from '../Assets/mainpic.jpeg'



import './Styles/Home.css'
import { Link } from 'react-router-dom'
import Login from './Login'

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
                <div className='pictureone'>
               <img src={imagess} alt="Zenfit gym homepage banner" width="500" height="300" />
              
                </div>

                <div className='picturetwo'>
               <img src={gif}  alt="Zenn" width="500" height="300" />
                </div>

               </div> 
              
              
               <div className="bmi-container">
            <div className="section_div_2"> 
          
           
  <form

    onSubmit={(event) => {
      event.preventDefault(); // Prevent form submission
      calculateBMI();
    }}
  >
    <h1>CHECK BMI</h1>
    <label>Weight(Kg):</label>
    <input type="text" id="weight" placeholder="Enter your weight" />

    <label>Height(cm):</label>
    <input type="text" id="height" placeholder="Enter your height" />
    <p id="bmiResult"></p>
    <button type="submit" className="calculate_btn">
      Calculate BMI
    </button>
  </form>


  <div className='para'>
<h2>WHAT IS BMI?</h2>
<p>

Body Mass Index (BMI) is a measure that uses your weight and height to estimate whether your body
 weight is healthy. It is a widely used tool to categorize individuals into different weight categories
  (underweight, normal weight, overweight, or obesity).   </p>
  

  <h2>BMI Categories:</h2>
<p>
Underweight: BMI less than 18.5<br/>
Normal weight: BMI 18.5 to 24.9<br/>
Overweight: BMI 25 to 29.9<br />

Obesity: BMI 30 or more <br/>
<b>Disclaimer:</b> BMI is a general indicator and does not account for muscle mass, bone density, or other health factors.
 This calculator is for informational purposes only.
 </p>

</div>

</div>

</div>

    <div class="horizontal-scroll-container">
      <div class="item">
          <img src={card1} alt="Logo"/>

           <div class="text-content">
               <div className="text-content">
             <h1>
              WELCOME TO <br /> ZENFIT
              </h1>
               <p> We’ve created a comfortable, safe and <br /> energetic environment for everyone. <br />
                A space where you can go at your own pace, <br /> and do your own thing without ever having <br />
                to worry about being judged.
             </p>
             <button class="simple-button">Learn More</button>
             </div>
         </div>

        <div class="item">
                          <img src={cardtwo} alt="card"/>
                          <div class="text-content">
                     <h1>Strava Strong Start<br/> Challenge</h1>
                <p>Start 2025 off strong! Complete the Strong Start Challenge by <br/>logging 200 minutes of any activity in the Strava app during <br/>
                the month of January. When you finish, you'll get the exclusive <br/> Strong Start Challenge digital badge to show off on <br/>your Strava profile..</p>
                <button class="simple-button">Click Me</button>

            </div>
           </div>
            
        <div class="item">
        <img src={card3} alt="card"/>


            <div class="text-content">
                <h1>NEW! Workout Guides <br/>As Per Your Goals</h1>
                <p>We believe in providing a high-quality experience as per <br/>
                    the requirement.Our Dietplans and Workout are Flexible.</p>
                <button class="simple-button">Explore More</button>
            </div>

            </div>
        </div>
</div>

<div className='background'>
    <img src={backg}    alt="Background" />
    </div>
    <div className='background'>
    <img src={bkkkk}    alt="Background" />
    </div>
    
<div  class="last">
                
                       
    <div class="horizontal-scroll-container">
      <div class="item">
          <img src={diett} alt="Logo"/>

           <div class="text-content">
               <div className="text-content">
             <h1>
             CUSTOMISED DIET </h1>
              <p>We generate personalized diet plans as per the your health goals <br/>
              and preferences. Whether it's for weight loss, muscle gain, <br/>or a balanced diet, we've got you covered.</p>

             <button class="simple-button">Learn More</button>
             </div>
         </div>

        <div class="item">
                          <img src={seco} alt="card"/>
                          <div class="text-content">
                     <h1>CUSTOMISED WORKOUT <br/>PLAN</h1>
                     <p>Our custom workout plans are tailored to your fitness goals, ensuring <br/>
                     you achieve the results you're looking for. Whether you're a <br/>beginner 
                      or an experienced athlete, we have the right <br/> plan for you.</p>

                <button class="simple-button">Learn More</button>

            </div>
           </div>
            
        <div class="item">
        <img src={thirrd} alt="card"/>


            <div class="text-content">
                <h1>ZENFIT IS JUDGEMENTAL-<br/>FREE ZONE</h1>
                <p>At Zenfit, we believe in creating a supportive and non-judgmental<br/>
                 environment where everyone can work towards their fitness goals <br/>
                 at their own pace, without fear of criticism.
                 </p>

                <button class="simple-button">Explore More</button>
            </div>

            </div>
        </div>
</div>


</div>
<div className='background'>
<img src={bigge} alt="cover"/>
</div>



<div className='lastsec'>
<div className="feature-list">
  <h2>Get Started Today</h2>
          <ul>
            <li>Perfect diet and workout guides from experienced trainers.</li>
            <li>Options like yoga, Pilates, spin, Zumba,strength training...</li>
            <li>Social media integration for easy sharing of events and promotions.</li>
            <li>Performance analytics for tracking class popularity and membership trends.</li>
          </ul>
        </div>


<div className='last'>
<p>
At Zenfit, we believe fitness should be accessible to everyone!
At Zenfit, we believe fitness should be accessible to everyone! That's why we offer free memberships with no hidden fees.
 Our services and perks are available online and may vary depending on availability. You must be at least 18 years old to
  join, or 13-17 with parental/guardian consent. For detailed information, please visit our website. We reserve the right 
  to modify services, terms, or availability at any time. ©2025 Zenfit Franchising LLC.
</p>
</div>
</div>



<div className='footer_div'>
          
<div className="brand-logo">
        <img src={logo} alt="Logo" />
        <button class="curve-button">Download the ZF app</button>
</div>
  
                <div>
                    <div>
                    <ul>
                       <p><li> Info </li></p>
                            <li>Newroom</li>
                            <li>Careers</li>
                            <li>FAQs</li>
                            <li>Directory</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    
                    <div>
                        <ul>
                        <p>Copyrights</p>
                            <li>&copy; 2024 Zenfit</li>
                            <li>All rights reserved</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>FAQS</li>
                          
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
                <hr></hr>
                
                <div>
                        <p> ©2024 Zenfit Franchising, LLC.</p>
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
