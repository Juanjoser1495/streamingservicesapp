import { useState } from "react";

const StreamingSearchCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategory(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          id="category"
          name="category"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
    </>
  );
};

export default StreamingSearchCategory;
