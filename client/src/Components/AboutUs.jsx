import React from 'react';
import './Styles/AboutUs.css'; // You can add a separate CSS file for styling

const AboutUs = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
        <p>Perfect Platform to Start Your Fitness Journey</p>
      </header>

      <section>
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong> ZenFit</strong>, a digital platform built with a passion for fitness and
          cutting-edge web development. We specialize in creating seamless, interactive, and dynamic web experiences
          tailored specifically for gyms, fitness studios, and personal trainers.
        </p>
        <p>
          With our full stack web development expertise, we’ve designed <strong>ZenFit</strong> to help
          fitness businesses connect with their clients effortlessly, manage schedules, and showcase their services in
          a user-friendly way.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower fitness businesses with a digital presence that reflects their energy and
          dedication. Whether you're a small local gym or a large fitness chain, we provide modern web solutions that
          help you achieve your fitness goals, manage your workouts, diet, and grow your muscles.
        </p>

        <h2>Our Services</h2>

        <div className="feature-list">
          <ul>
            <li><strong>Certified and Verified Trainers:</strong> Professionals with recognized fitness certifications who can guide members safely and effectively.</li>
            <li><strong>Best Equipment:</strong> Includes free weights, resistance machines, cardio machines (treadmills, ellipticals, rowing machines), and functional training tools (kettlebells, resistance bands).</li>
            <li><strong>Variety of Group Fitness Classes:</strong> Options like yoga, Pilates, spin, Zumba, HIIT (High-Intensity Interval Training), strength training, and boot camps to cater to different preferences and fitness levels.</li>
            <li><strong>Personalized Diet:</strong> Diet plans tailored to your fitness goals (veg/Non-Veg).</li>
            <li><strong>Digital and Technological Integration:</strong> The best platform for your fitness journey.</li>
          </ul>
        </div>

        <h2>Features Built for You</h2>
        <p>Our platform is designed to make fitness easy and affordable. Key features include:</p>

        <div className="feature-list">
          <ul>
            <li>Perfect diet and workout guides from experienced trainers.</li>
            <li>Options like yoga, Pilates, spin, Zumba, HIIT, strength training...</li>
            <li>Social media integration for easy sharing of events and promotions.</li>
            <li>Performance analytics for tracking class popularity and membership trends.</li>
          </ul>
        </div>

        <h2>Why Choose Us?</h2>
        <p>We create customized solutions that fit your gym’s unique needs. From
          user-centered design to scalable systems, we ensure that your fitness business can thrive in the digital age.
        </p>

        <p>Our platform offers customizable features, ongoing technical support, and the ability to support your fitness journey.</p>

        <div className="cta">
          <p>Ready to transform your gym’s online presence?</p>
          <a href="contact.html">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
