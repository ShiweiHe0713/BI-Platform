import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./pages/Student"
import Home from "./pages"

export default function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student" element={<Student />} />
            </Routes>
        </Router>
  );
}
