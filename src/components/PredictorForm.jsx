import React, { useState } from "react";
import axios from "axios";

const PredictorForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    gender: "male",
    age: "",
    height: "",
    weight: "",
    duration: "",
    heart_rate: "",
    body_temp: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(response.data.calories);
    } catch (error) {
      alert("Error connecting to backend");
      console.error(error);
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Enter Details</h2>

      <select name="gender" className="input" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input className="input" type="number" name="age" placeholder="Age" onChange={handleChange} />
      <input className="input" type="number" name="height" placeholder="Height (cm)" onChange={handleChange} />
      <input className="input" type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} />
      <input className="input" type="number" name="duration" placeholder="Duration (min)" onChange={handleChange} />
      <input className="input" type="number" name="heart_rate" placeholder="Heart Rate" onChange={handleChange} />
      <input className="input" type="number" name="body_temp" placeholder="Body Temp (°C)" onChange={handleChange} />

      <button className="button">Predict Calories 🔥</button>
    </form>
  );
};

export default PredictorForm;