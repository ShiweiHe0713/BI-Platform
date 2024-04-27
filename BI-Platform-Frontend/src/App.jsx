import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Todo from "./components/Todo/Todo";

function App (){
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="./pages/Student.jsx"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;