import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { About, Home, Projects } from "./pages";
import { startTransition } from "react";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);


  const handleMenuToggle = () => {
    startTransition(() => {
      setShowMenu((prev) => !prev);
    });
  };

  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={<Home setShowMenu={setShowMenu} handleMenuToggle={handleMenuToggle} showMenu={showMenu} />}
        />
        <Route
          path="/about"
          element={<About setShowMenu={setShowMenu} handleMenuToggle={handleMenuToggle} showMenu={showMenu} />}
        />
        <Route
          path="/projects"
          element={<Projects setShowMenu={setShowMenu} handleMenuToggle={handleMenuToggle} showMenu={showMenu} />}
        />
      </Routes>
    </div>
  );
};

export default App;
