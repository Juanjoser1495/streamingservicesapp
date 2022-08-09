export const saveLike = async (title) => {
  const url = "http://localhost:8080/like";

  const jsonDataPost = { title: title };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(jsonDataPost),
    headers: new Headers({ "Content-Type": "application/json" }),
  });

  return response.status;
};
