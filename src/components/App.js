import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import FinalResume from "./components/FinalResume";
import "./../styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation between sections */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/final-resume" element={<FinalResume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
