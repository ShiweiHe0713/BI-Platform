import React from "react";
import ReactDOM from "react-dom";
// import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav>
          <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/users">Users</Link>
              </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
