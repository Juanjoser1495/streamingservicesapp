import StreamingGridItem from "./StreamingGridItem";
import { useFetchRankingTop10 } from "../hooks/useFetchRankingTop10";

const StreamingGrid = ({ category }) => {
  const { ranking, message } = useFetchRankingTop10(category);

  const isRankingAvailable = message == "Data successufull retrieved" ? true : false;

  return (
    <>
      {isRankingAvailable ? (
        ranking.map((data) => (
          <StreamingGridItem
            key={data.id}
            url={data.imageUrl}
            title={data.movieName}
          ></StreamingGridItem>
        ))
      ) : (
        <p>{message}</p>
      )}
    </>
  );
};

export default StreamingGrid;
