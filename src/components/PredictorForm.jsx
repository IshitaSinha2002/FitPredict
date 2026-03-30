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
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
    >
      <h2 className="text-lg font-semibold text-center">Enter Details</h2>

      <select name="gender" onChange={handleChange} className="w-full p-2 rounded bg-gray-700">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input type="number" name="age" placeholder="Age" onChange={handleChange} className="input" />
      <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} className="input" />
      <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} className="input" />
      <input type="number" name="duration" placeholder="Workout Duration (min)" onChange={handleChange} className="input" />
      <input type="number" name="heart_rate" placeholder="Heart Rate" onChange={handleChange} className="input" />
      <input type="number" name="body_temp" placeholder="Body Temp (°C)" onChange={handleChange} className="input" />

      <button className="w-full bg-green-500 hover:bg-green-600 p-2 rounded font-semibold">
        Predict Calories 🔥
      </button>
    </form>
  );
};

export default PredictorForm;