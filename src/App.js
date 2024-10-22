import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {About, Home, Projects} from './pages';


const App = () => {

  return (
    <>
      <div className="App">

      <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/about' element={<About />}  />
      <Route path='/projects' element={<Projects />}  />

      </Routes>
      </div>
    </>
  );
};

export default App;
