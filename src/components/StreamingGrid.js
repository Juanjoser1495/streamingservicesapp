import StreamingGridItem from "./StreamingGridItem";
import { useFetchRankingTop10 } from "../hooks/useFetchRankingTop10";
import StreamingError from "./StreamingError";

const StreamingGrid = ({ category }) => {
  const { ranking, message } = useFetchRankingTop10(category);

  const isRankingAvailable = message == "Data successufull retrieved" ? true : false;

  return (
    <>
      <h2>{category}</h2>
      {isRankingAvailable ? (
        ranking.map((data) => (
          <StreamingGridItem
            key={data.id}
            url={data.imageUrl}
            title={data.movieName}
          ></StreamingGridItem>
        ))
      ) : (
        <StreamingError message={message}></StreamingError>
      )}
    </>
  );
};

export default StreamingGrid;
