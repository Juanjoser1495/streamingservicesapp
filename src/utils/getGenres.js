export const getGenres = async () => {
  const url = "http://localhost:8080/genres";

  const responseExternalService = await fetch(url);

  const { message, data } = await responseExternalService.json();

  const response = {
    message: message,
    genres: data,
    httpStatus: responseExternalService.status,
  };

  return response;
};
