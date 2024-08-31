import React, { useState } from 'react';
import { database, storage } from '../firebaseConfig'; // Import the database and storage
import { ref as dbRef, set } from 'firebase/database'; // Import ref and set from firebase/database
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import ref, uploadBytes, and getDownloadURL from firebase/storage
import '../styles.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    phoneNumber: '',
    service: '',
    photo: null // Add a field for the photo
  });

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let photoURL = '';
    if (formData.photo) {
      const photoStorageRef = storageRef(storage, `photos/${formData.username}`);
      await uploadBytes(photoStorageRef, formData.photo);
      photoURL = await getDownloadURL(photoStorageRef);
    }

    const dbReference = dbRef(database, 'serviceProviders/' + formData.username);
    set(dbReference, {
      ...formData,
      photo: photoURL
    })
      .then(() => {
        console.log('Data saved successfully');
        setFormData({
          fullName: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
          address: '',
          city: '',
          phoneNumber: '',
          service: '',
          photo: null
        });
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

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

      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Register as Service Provider</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Full Name"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email Address"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="username"
                value={formData.username}
                placeholder="Username"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="City"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Phone Number"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Service</option>
                <option value="Electrician">Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="House Cleaning">House Cleaning</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Painter">Painter</option>
                <option value="Gardener">Gardener</option>
                <option value="AC Technician">AC Technician</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="photo">Upload Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
