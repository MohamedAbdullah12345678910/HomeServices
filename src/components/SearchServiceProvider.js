import React, { useState } from 'react';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';
import { database } from '../firebaseConfig'; // Ensure correct import
import '../styles.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SearchServiceProvider = () => {
  const [cities] = useState([
    'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Erode', 'Tirunelveli', 'Vellore', 'Thoothukudi'
  ]);
  const [services] = useState([
    'Electrician', 'Plumber', 'House Cleaning', 'Carpenter', 'Painter', 'Gardener', 'AC Technician'
  ]);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [serviceProviders, setServiceProviders] = useState([]);

  const handleCityChange = (e) => setSelectedCity(e.target.value);
  const handleServiceChange = (e) => setSelectedService(e.target.value);

  const handleSearch = async () => {
    if (selectedCity || selectedService) {
      try {
        const dbRef = ref(database, 'serviceProviders');
        
        // Query to get all providers for the selected city
        const cityQuery = query(dbRef, orderByChild('city'), equalTo(selectedCity));

        const snapshot = await get(cityQuery);

        if (snapshot.exists()) {
          const cityData = snapshot.val();
          
          // Filter providers based on selected service
          const filteredProviders = Object.values(cityData).filter(provider => 
            (provider.service === selectedService || selectedService === '')
          );
          
          setServiceProviders(filteredProviders);
        } else {
          setServiceProviders([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setServiceProviders([]);
      }
    }
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
          <h2 className="card-title text-center mb-4">Search Service Provider</h2>
          <div className="mb-3">
            <select onChange={handleCityChange} value={selectedCity} className="form-select">
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <select onChange={handleServiceChange} value={selectedService} className="form-select">
              <option value="">Select Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
          <button onClick={handleSearch} className="btn btn-primary w-100">Search Service Provider</button>
        </div>
      </div>

      <div className="row mt-4">
        {serviceProviders.length > 0 ? (
          serviceProviders.map((provider, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
              <div className="image-container">
      <img src={provider.photo} className="card-img-top" alt={provider.fullName} />
    </div>
              <div className="card-body">
                  <h5 className="card-title">{provider.fullName}</h5>
                  <p className="card-text"><strong>Email:</strong> {provider.email}</p>
                  <p className="card-text"><strong>Phone:</strong> {provider.phoneNumber}</p>
                  <p className="card-text"><strong>Address:</strong> {provider.address}</p>
                  <p className="card-text"><strong>Service:</strong> {provider.service}</p>
                  <button className="btn btn-success w-100">Book Service</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No service providers found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchServiceProvider;
