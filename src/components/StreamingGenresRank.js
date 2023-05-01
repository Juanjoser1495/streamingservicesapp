import { getGenreRanking } from "../utils/getGenreRanking";
import { useState } from "react";

const StreamingGenresRank = () => {
  getGenreRanking().then(({ ranking, status, httpStatus }) => {
    setRankingGenres(ranking);
  });

  const [rankingGenres, setRankingGenres] = useState({ ranking: [] });
  //console.log(ranking);

  if (rankingGenres === undefined) {
    return <>Still loading...</>;
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <p className="lead">{JSON.stringify(rankingGenres)}</p>

        <p className="lead">Lo que sea</p>
      </div>
    </>
  );
};
export default StreamingGenresRank;
