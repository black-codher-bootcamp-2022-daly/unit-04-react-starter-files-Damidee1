import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [age, setAge] = useState(0);
  const [color, setColor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setAge(0);
    setName("");
    setColor("");

    setSubmitted(true);
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Pet's Age:
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Pet's Color:
            <input
              type="text"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        <input type="submit" value="Submit" id="submit-button" />
      </form>
      {submitted ? (
        "Thanks for submitting"
      ) : (
        <>
          <h3>Results</h3>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
        </>
      )}
    </div>
  );
};

export default PetForm;
