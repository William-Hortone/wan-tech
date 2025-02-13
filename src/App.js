import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { About, Home, Projects } from "./pages";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home setShowMenu={setShowMenu} showMenu={showMenu} />}
          />
          <Route
            path="/about"
            element={<About setShowMenu={setShowMenu} showMenu={showMenu} />}
          />
          <Route
            path="/projects"
            element={<Projects setShowMenu={setShowMenu} showMenu={showMenu} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
