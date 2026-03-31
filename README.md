<h1>Fitness Progress Predictor</h1>

<h3>Project Overview</h3>
<p>
Fitness Progress Predictor is a full-stack machine learning application designed to estimate the number of calories burned based on user-specific physiological and workout-related inputs. 
The system takes inputs such as age, gender, weight, workout duration, heart rate, and body temperature, processes them through trained regression models, and provides accurate calorie predictions along with fitness insights.
</p>

<h4>Dataset: <a href="https://www.kaggle.com/datasets/nadeemajeedch/fitness-tracker-dataset">Kaggle Fitness Dataset</a></h4>

<h3>Tech Stack</h3>
<ul>
  <li>Front-end: ReactJS, CSS</li>
  <li>Back-end: Python, Flask</li>
  <li>Machine Learning: Regression Models (Linear Regression, Decision Tree, Random Forest), Feature Engineering, StandardScaler</li>
</ul>

<h3>Home Page</h3>
<img src="https://github.com/IshitaSinha2002/FitPredict/blob/main/Screenshot%20(73).png" style="width: 500px; height: 400px; object-fit: cover;">

<h3>Input Form</h3>
<p>
Designed an interactive and user-friendly input interface where users can provide their fitness and workout details through a clean and structured UI. 
The form captures key attributes required for prediction and ensures a smooth user experience.
</p>

<h3>Results Page</h3>
<p>
Developed a results page that displays predicted calorie expenditure. The UI highlights results clearly and provides immediate feedback to the user.
</p>
<img src="https://github.com/IshitaSinha2002/FitPredict/blob/main/Screenshot%20(74).png" style="width: 500px; height: 400px; object-fit: cover;">

<h3>Model Training Implementation Details</h3>
<ol>
  <li><b>Data Processing:</b>
    <ul>
      <li>Merged datasets using User_ID.</li>
      <li>Removed unnecessary columns.</li>
      <li>Encoded categorical variables.</li>
    </ul>
  </li>

  <li><b>Feature Engineering:</b>
    <ul>
      <li>Computed BMI.</li>
      <li>Calculated workout intensity.</li>
      <li>Derived effort score.</li>
    </ul>
  </li>

  <li><b>Model Development:</b>
    <ul>
      <li>Linear Regression</li>
      <li>Decision Tree Regressor</li>
      <li>Random Forest Regressor</li>
    </ul>
  </li>

  <li><b>Model Evaluation:</b>
    <ul>
      <li>R² Score and MAE used for evaluation</li>
    </ul>
  </li>

  <li><b>Model Comparison:</b>
    <table>
      <tr><th>Model</th><th>R²</th><th>MAE</th></tr>
      <tr><td>Linear Regression</td><td>0.9886</td><td>5.02</td></tr>
      <tr><td>Decision Tree</td><td>0.9945</td><td>3.06</td></tr>
      <tr><td>Random Forest</td><td>0.9983</td><td>1.65</td></tr>
    </table>
  </li>
</ol>

<h3>Backend Implementation</h3>
<ol>
  <li>Built REST APIs using Flask</li>
  <li>Integrated trained model</li>
  <li>Handled preprocessing and prediction pipeline</li>
</ol>
