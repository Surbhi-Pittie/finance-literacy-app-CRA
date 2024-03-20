import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Main1 from './assets/Main1.jpg';
import Discuss from "./assets/Discuss.jpg";
import Learn from "./assets/Learn.jpg";
import Quiz from "./assets/Quiz.jpg";
import News from "./assets/News.jpeg";
import Streak from "./assets/Streak.jpg";


import "./LandingPage.css";
import NewsSection from './NewsSection';


function LandingPage() {
  return (
    <>
      <div className="landing-container">
        <h1 className="landing-title">Finzo: Empower Your <br />Financial Journey</h1>
        <p className="landing-description">Discover financial empowerment with Finzo. Your essential tool for navigating the world of finance, connecting with a community, and accessing valuable resources. Start your journey to financial literacy now.</p>
        <img src={Main1} alt="Hero Section" className="hero-image" />
      </div>
      <div className="features-container">
        <h2 className="features-title">Our Features</h2>
        <div className="features-row">
          <div className="feature-card">
            <img src={Learn} alt="Feature" className="feature-image" />
            <h4 className='feature-heading'>Expand Your Financial Knowledge!</h4>
            <p className="feature-description">Dive into our Resource Library to expand your knowledge with fresh topics.</p>
            <Link to="/news" className="explore-button">Explore</Link>
          </div>
          <div className="feature-card">
            <img src={News} alt="Feature" className="feature-image" />
            <h4 className='feature-heading'>Stay Informed!</h4>
            <p className="feature-description">Investigate the latest happenings in the world of financial news.</p>
            <Link to="/news" className="explore-button">Explore</Link>
          </div>
          <div className="feature-card">
            <img src={Quiz} alt="Feature" className="feature-image" />
            <h4 className='feature-heading'>Test Your Financial Knowledge!</h4>
            <p className="feature-description">Discover a variety of quizzes on different subjects within our Quiz Section.</p>
            <Link to="/news" className="explore-button">Explore</Link>
          </div>
          
        </div>
        <div className="features-row">
          <div className="feature-card">
            <img src={Discuss} alt="Feature" className="feature-image" />
            <h4 className='feature-heading'>Join the Conversation!</h4>
            <p className="feature-description">Engage with the community and explore insightful blogs in our Discussion Section.</p>
            <Link to="/news" className="explore-button">Explore</Link>
          </div>
          <div className="feature-card">
            <img src={Streak} alt="Feature" className="feature-image" />
            <h4 className='feature-heading'>Fuel Your Mind!</h4>
            <p className="feature-description">Read daily topics, keep your streak in our "Daily Dose of Knowledge" section!</p>
            <Link to="/news" className="explore-button">Explore</Link>
          </div>
          
        </div>
        {/* Repeat for additional rows of features if necessary */}
      </div>
    </>
  );
}

export default LandingPage;
