import React from "react";
import PropTypes from "prop-types";

export const Search = (props) => {
  const { keyword, setKeyword } = props;

  function handleChange(changeEvent) {
    console.log("Tobia event =>", changeEvent);
    setKeyword(changeEvent.target.value);
  }

  return (
    <form>
      <input type="text" value={keyword} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};
