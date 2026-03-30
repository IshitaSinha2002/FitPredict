import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import PredictorForm from "./components/PredictorForm.jsx";
import ResultCard from "./components/ResultCard.jsx";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6">
        <PredictorForm setResult={setResult} />
        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;