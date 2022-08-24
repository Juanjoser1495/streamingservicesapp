export const getGenres = async () => {
  const url = "http://localhost:8080/genres";

  const responseExternalService = await fetch(url);

  const { message, data } = await responseExternalService.json();

  const dataFormatted = data.map((genre) => {
    genre.genre =
      genre.genre.charAt(0).toUpperCase() + genre.genre.slice(1).toLowerCase();
    return genre;
  });

  dataFormatted.push({ idGenre: 0, genre: "All genre" });

  const response = {
    message: message,
    genres: dataFormatted,
    httpStatus: responseExternalService.status,
  };

  return response;
};
