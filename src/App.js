import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      axios.post(`${process.env.REACT_APP_API_URL}/adduser`, formData) // Using environment variable
          .then(response => {
              alert(response.data);
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
  };

  return (
    <div className="App">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div>
          <label>Sex: </label>
          <input type="text" name="sex" value={formData.sex} onChange={handleChange} required />
        </div>
        <div>
          <label>City: </label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label>State: </label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
