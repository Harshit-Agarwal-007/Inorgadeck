import React from "react";
import Landingpage from "./components/landingpage";
import Navbar from "./components/navbar";
import About from "./components/About";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Marquee from "./components/marquee";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#124e8c] to-[#051526]">
     
      <Router>
        <Navbar />
        <Landingpage/>
        <Marquee />
        <About/>
        <Insights />
        <Contact /> 
        <Routes>
          <Route path="/landing" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
