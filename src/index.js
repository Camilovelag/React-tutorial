import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"

//stylesheet
import "./functionBased/App.css"
import Navbar from './functionBased/components/Navbar';
import SinglePage from './functionBased/pages/SinglePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about/*" element={<About />} >
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>
);