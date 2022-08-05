import { useState, useEffect } from "react";
import { getTop10Ranking } from "../utils/getTop10Ranking";

export const useFetchRankingTop10 = (category) => {
  const [rankingTop10, setrankingTop10] = useState({
    ranking: [],
    message: "",
  });

  useEffect(() => {
    getTop10Ranking(category).then(({ ranking, status }) => {
      setrankingTop10({ ranking: ranking, message: status });
    });
  }, [category]);

  return rankingTop10;
};
