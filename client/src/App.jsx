import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Student from "./pages/Student";
import Finance from "./pages/Finance";
import TodoList from "./pages/TodoList";

export default function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/todolist" element={<TodoList />} />
            </Routes>
        </Router>
  );
}
