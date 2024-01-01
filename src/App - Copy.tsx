import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VideoBackground from "./components/VideoBackground";
import About from "./components/About";

import Contact from "./components/contact";
import YouTubeVideo from "./components/YoutubeVideo";
import Header2 from "./components/Header2.tsx";
import Home from "./components/pages/home/Home.tsx";
import Games from "./components/pages/games/Games.tsx";
import Books from "./components/pages/books/Books.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Header2 />
      <VideoBackground />
      <About />
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/games" element={<Games />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      {/* <TeamMembers /> */}
      <YouTubeVideo videoId="sWZ17Yc379I" /> 
      <Contact />
    </Router>
  );
};

export default App;
