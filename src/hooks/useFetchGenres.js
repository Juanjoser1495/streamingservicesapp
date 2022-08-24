import { useEffect, useState } from "react";
import { getGenres } from "../utils/getGenres";

export const useFetchGenres = () => {
  const [genreToRender, setGenreToRender] = useState({ genres: [] });

  useEffect(() => {
    getGenres().then(({ genres }) => setGenreToRender({ genres }));
  }, []);

  return genreToRender;
};
