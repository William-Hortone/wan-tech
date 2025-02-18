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
          element={<Home  handleMenuToggle={handleMenuToggle} showMenu={showMenu} />}
        />
        <Route
          path="/about"
          element={<About  handleMenuToggle={handleMenuToggle} showMenu={showMenu} />}
        />
        <Route
          path="/projects"
          element={<Projects  handleMenuToggle={handleMenuToggle} showMenu={showMenu} />}
        />
      </Routes>
    </div>
  );
};

export default App;
