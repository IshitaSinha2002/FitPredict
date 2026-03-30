import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <h2>🔥 Calories Burned</h2>
      <p>{result}</p>
    </div>
  );
};

export default ResultCard;