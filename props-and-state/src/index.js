import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom/client";
import data from "./models/headphones.json";

import GadgetList from "./components/GadgetList";
import ClickCounter from "./components/Clickcounter";
const mainStyle = { fontFamily: "Arial" };

const App = () => {
  const headphones = [
    { title: "Headphones 1" },
    { title: "Headphones 2" },
    { title: "Headphones 3" },
    { title: "Headphones 4" },
  ];
  const [headphonesList] = useState(data);

  return (
    <section style={mainStyle}>
      <h1>Electronics Store</h1>
      <GadgetList items={headphonesList} />
      <ClickCounter />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
