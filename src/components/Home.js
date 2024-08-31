import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import 'normalize.css';

const Home = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home Services</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">Search Service Provider</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="jumbotron text-center bg-light py-5">
        <h1 className="display-4">Welcome to Home Services Management System</h1>
        <p className="lead">Your one-stop solution for finding trusted service providers in your city.</p>
      </div>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={image1} className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Electricians</h5>
              <p className="card-text">Expert electricians to handle all your electrical needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={image2} className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Plumbers</h5>
              <p className="card-text">Reliable plumbers to fix any plumbing issues you face.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={image3} className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Carpenters</h5>
              <p className="card-text">Skilled carpenters to create custom furniture and fittings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
