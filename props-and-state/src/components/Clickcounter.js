import React, { useState } from "react";

const ClickCounter = () => {
  const buttonStyle = {};
  const [count, setCount] = useState(0);
  const isCountZero = count <= 0;
  const newCount = isCountZero ? 0 : count - 1;
  const increase = count + 1;
  return (
    <div>
      <h2>Count: {count}</h2>
      <div>Click the button below to increment the counter</div>
      <button style={buttonStyle} onClick={() => setCount(increase)}>
        Click!
      </button>
      <button style={buttonStyle} onClick={() => setCount(newCount)}>
        Unclick!
      </button>
    </div>
  );
};

export default ClickCounter;
