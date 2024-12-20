import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technologies";
import Layout from "./components/Layout";
import Planet from "./components/Planet";
import "./App.css";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/destination/:planetName" element={<Planet />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </Router>
  );
};

export default App;
