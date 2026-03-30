import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="mt-6 bg-green-600 p-6 rounded-xl text-center shadow-lg">
      <h2 className="text-xl font-bold">🔥 Calories Burned</h2>
      <p className="text-3xl mt-2">{result}</p>
    </div>
  );
};

export default ResultCard;