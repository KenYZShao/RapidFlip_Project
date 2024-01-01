import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoBackground from "./components/VideoBackground";
import About from "./components/About";

import Contact from "./components/contact";
import YouTubeVideo from "./components/YoutubeVideo";
import Header2 from "./components/Header2.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header2 />
      <VideoBackground />
      <About></About>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <TeamMembers /> */}
      <YouTubeVideo videoId="sWZ17Yc379I" /> 
      <Contact />
    </Router>
  );
};

export default App;
