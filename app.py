from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

# -----------------------------
# Initialize App
# -----------------------------
app = Flask(__name__)
CORS(app)

# -----------------------------
# Load Model & Scaler
# -----------------------------
model = joblib.load("fitness_model.pkl")
scaler = joblib.load("scaler.pkl")

# -----------------------------
# Home Route (for testing)
# -----------------------------
@app.route('/')
def home():
    return "Fitness Predictor Backend Running 🚀"

# -----------------------------
# Prediction Route
# -----------------------------
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        # Extract input
        gender = 1 if data["gender"] == "male" else 0
        age = float(data["age"])
        height = float(data["height"])
        weight = float(data["weight"])
        duration = float(data["duration"])
        heart_rate = float(data["heart_rate"])
        body_temp = float(data["body_temp"])

        # -----------------------------
        # Feature Engineering (SAME AS TRAINING)
        # -----------------------------
        bmi = weight / ((height / 100) ** 2)
        intensity = heart_rate / age
        effort = duration * heart_rate

        # Final input array
        features = np.array([[gender, age, height, weight,
                              duration, heart_rate, body_temp,
                              bmi, intensity, effort]])

        # Scale input
        features_scaled = scaler.transform(features)

        # Predict
        prediction = model.predict(features_scaled)[0]

        return jsonify({
            "calories": round(prediction, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# -----------------------------
# Run Server
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True)