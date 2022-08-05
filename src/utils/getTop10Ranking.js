export const getTop10Ranking = async (category) => {
  const url = `http://localhost:8080/genre/${category}`;

  const responseExternalService = await fetch(url);

  const { message, data } = await responseExternalService.json();

  const response = { status: message, ranking: data };

  return response;
};
