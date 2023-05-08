import { getGenreRanking } from "../utils/getGenreRanking";
import { useState, useEffect } from "react";
import StreamingGenreRankItem from "./StreamingGenreRankItem";

const StreamingGenresRank = () => {
  useEffect(() => {
    getGenreRanking().then(({ ranking }) => {
      setRankingGenres(ranking);
    });
  }, []);

  const [rankingGenres, setRankingGenres] = useState({ ranking: [] });

  if (rankingGenres === undefined) {
    return <>Still loading...</>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Genre</th>
            <th scope="col"># Of Likes</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rankingGenres).map((e) => (
            <StreamingGenreRankItem
              key={Math.random()}
              nameGenre={e}
              numberOfLikes={rankingGenres[e]}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StreamingGenresRank;
