import { useState, useEffect } from "react";
import { getTop10Ranking } from "../utils/getTop10Ranking";

export const useFetchRankingTop10 = (category, isNeededToRefresh) => {
  const [rankingTop10, setrankingTop10] = useState({
    ranking: [],
    message: "",
  });

  useEffect(() => {
    getTop10Ranking(category).then(({ ranking, status, httpStatus }) => {
      setrankingTop10({ ranking: ranking, message: status, httpStatus: httpStatus });
    });
  }, [category]);

  useEffect(() => {
    getTop10Ranking(category).then(({ ranking, status, httpStatus }) => {
      setrankingTop10({ ranking: ranking, message: status, httpStatus: httpStatus });
    });
    // eslint-disable-next-line
  }, [isNeededToRefresh]);

  return rankingTop10;
};
