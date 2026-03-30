import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import PredictorForm from "./components/PredictorForm.jsx";
import ResultCard from "./components/ResultCard.jsx";
import "./index.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container">
        <PredictorForm setResult={setResult} />
        {result && <ResultCard result={result} />}
      </div>
    </>
  );
}

export default App;