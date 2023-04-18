export const formatTitleHead = (title) => {
  let titleSplite = title.toLowerCase();
  titleSplite = titleSplite.split(" ");
  for (let i = 0; i < titleSplite.length; i++) {
    titleSplite[i] = titleSplite[i].charAt(0).toUpperCase() + titleSplite[i].slice(1);
  }

  return titleSplite.join(" ");
};
