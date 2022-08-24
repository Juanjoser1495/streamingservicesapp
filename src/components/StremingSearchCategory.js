import StreamingSearchCategoryDropdown from "./StreamingSearchCategoryDropdown";
import { useFetchGenres } from "../hooks/useFetchGenres";
import { useState } from "react";

const StreamingSearchCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const { genres } = useFetchGenres();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category: </label>
        <select onChange={handleOnChange} name="category2" id="category2">
          {genres?.map((genre) => (
            <StreamingSearchCategoryDropdown
              textValue={genre.genre}
              key={genre.idGenre}
            ></StreamingSearchCategoryDropdown>
          ))}
        </select>
        <button type="submit">Get genre</button>
      </form>
    </>
  );
};

export default StreamingSearchCategory;
