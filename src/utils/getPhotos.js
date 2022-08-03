export const getPhotos = async (topic, numberOfPage) => {
  const apiKey = "563492ad6f9170000100000193f55a57ebca42a687560557b5ee3890";
  const url = `https://api.pexels.com/v1/search?query=${topic}&per_page=${numberOfPage}`;

  const responsePexesApi = await fetch(url, {
    method: "get",
    headers: new Headers({ Authorization: `${apiKey}` }),
  });

  const { photos } = await responsePexesApi.json();

  const photosToReturn = photos.map((photo) => {
    return {
      id: photo.id,
      urlPhoto: photo.src.medium,
      title: photo.alt,
    };
  });

  return photosToReturn;
};
