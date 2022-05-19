import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

import AddItem from "./components/AddItem";

import ItemDetails from "./components/ItemDetails";
import Login from "./screens/Login";
import Register from "./screens/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/itemDetails" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
