import StreamingGridItem from "./StreamingGridItem";
import { useFetchRankingTop10 } from "../hooks/useFetchRankingTop10";

const StreamingGrid = () => {
  const { ranking, message } = useFetchRankingTop10("action");
  console.log(ranking);
  return (
    <>
      {ranking.map((data) => (
        <StreamingGridItem
          key={data.id}
          url={data.imageUrl}
          title={data.movieName}
        ></StreamingGridItem>
      ))}
    </>
  );
};

export default StreamingGrid;
