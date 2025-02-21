import React from 'react'
import './ProjectPage.css'

const ProjectPage = () => {
  return (
    <div class="projects" id="projects">
        <h1>My Projects</h1>
        <div class="section">
            <div class="one">
                <i class='bx bx-devices'></i>
                <h3>X-Social-Media App</h3>
                <p id="FD-info">I built a social media app.The frontend uses ReactJS, React Router DOM, and Tailwind CSS. The backend follows MVC architecture with NodeJS, ExpressJS, and MongoDB. Key tools include JWT, Mongoose, dotenv, CORS, and cookie-parser.<br/><br/>Demo Link : <a href='https://x-socialmedia-aravind.onrender.com/'>https://x-socialmedia-aravind.onrender.com/</a>
                </p>
            </div>
            <div class="two">
                <i class='bx bx-line-chart'></i>
                <h3>Stock Price Predictor</h3>
                <p id="DV-info">The LSTM-based forecasting model leverages Long Short-Term Memory (LSTM) networks for precise stock price predictions, training on 60-day historical data from Yahoo Finance and providing interactive visualizations for comparative financial analysis.</p>
            </div>
            <div class="three">
                <i class='bx bxl-meta'></i>
                <h3>Catering Services Agency</h3>
                <p id="DM-info">I developed a React-based catering service application, enabling agencies to list menu items efficiently. Designed with custom CSS, it showcases my frontend expertise in creating a responsive, user-friendly, and visually appealing interface.<br/><br/> Demo Link : <a href='https://aravind-catering-service-agency.netlify.app/'>https://aravind-catering-service-agency.netlify.app/</a></p>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage