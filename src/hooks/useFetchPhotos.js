import { useState, useEffect } from "react";
import { getPhotos } from "../utils/getPhotos";

export const useStatePhotos = (topic, numberOfPage) => {
  const [state, setState] = useState({ photos: [], loading: true });

  useEffect(() => {
    getPhotos(topic, numberOfPage).then((photo) =>
      setState({ photos: photo, loading: false })
    );
  }, [topic]);

  return state;
};
