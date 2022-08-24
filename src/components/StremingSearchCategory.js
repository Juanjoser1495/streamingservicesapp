import { useEffect, useState } from "react";
import StreamingSearchCategoryDropdown from "./StreamingSearchCategoryDropdown";
import { getGenres } from "../utils/getGenres";

const StreamingSearchCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const [genreToRender, setGenreToRender] = useState({ genres: [] });

  useEffect(() => {
    getGenres().then(({ genres }) => setGenreToRender({ genres }));
  });

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
        <select name="category2" id="category2">
          {genreToRender.genres?.map((genre) => (
            <StreamingSearchCategoryDropdown
              value={genre.genre}
              key={genre.idGenre}
            ></StreamingSearchCategoryDropdown>
          ))}
        </select>
      </form>
    </>
  );
};

export default StreamingSearchCategory;
