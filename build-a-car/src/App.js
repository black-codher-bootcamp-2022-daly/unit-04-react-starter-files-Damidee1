import "./App.css";
import React from "react";
import Car from "./components/Car";
import Bicycle from "./components/Bicycle";
import Truck from "./components/Truck";
import Skateboard from "./components/Skateboard.js";

export default function App() {
  return (
    <div className="App">
      <Car />
      <Bicycle />
      <Truck />
      <Skateboard />
    </div>
  );
}
