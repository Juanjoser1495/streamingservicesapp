import { useState } from "react";
import "../css/StreamingSearchCategory.css";

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
    <div className="containter backgroundColorSearch">
      <form className="marginLeft16" onSubmit={handleSubmit}>
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          id="category"
          name="category"
          className="marginTop8 marginLeft16"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
    </div>
  );
};

export default StreamingSearchCategory;
