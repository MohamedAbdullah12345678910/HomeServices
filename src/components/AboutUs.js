import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const AboutUs = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/search">Search Service Provider</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to our Home Services Management System! We are dedicated to providing top-quality home maintenance services 
          through a trusted network of experienced professionals. Whether you need an electrician, plumber, or a house cleaner, 
          we have you covered.
        </p>
        <p>
          Our mission is to make home maintenance easy and accessible for everyone. With our user-friendly platform, you can 
          quickly find and book the best service providers in your area. We ensure that all our professionals are thoroughly 
          vetted and committed to delivering exceptional service.
        </p>
        <p>
          We believe in building long-term relationships with our customers by offering reliable, high-quality services. Your 
          satisfaction is our priority, and we continuously strive to exceed your expectations.
        </p>
        <p>Services we offer include:</p>
        <ul>
          <li>Electrician Services - Ensure your home is safely wired and powered.</li>
          <li>Plumbing Services - Get your leaks, clogs, and installations handled by experts.</li>
          <li>House Cleaning - Enjoy a spotless home with our thorough cleaning services.</li>
          <li>Carpentry - Skilled carpenters ready to craft and repair furniture and fittings.</li>
          <li>Painting - Professional painting services to give your home a fresh look.</li>
          <li>Gardening - Maintain a beautiful garden with our expert gardening services.</li>
          <li>AC Technician - Keep your home cool with reliable AC maintenance and repair.</li>
        </ul>
      </div>
      <div className="about-images">
        <div className="image-item">
          <img src={image1} alt="Professional Electrician at Work" />
        </div>
        <div className="image-item">
          <img src={image2} alt="Expert Plumber Fixing a Sink" />
        </div>
        <div className="image-item">
          <img src={image3} alt="House Cleaning Service in Action" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
