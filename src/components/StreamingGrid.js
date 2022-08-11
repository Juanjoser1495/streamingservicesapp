import StreamingGridItem from "./StreamingGridItem";
import { useFetchRankingTop10 } from "../hooks/useFetchRankingTop10";
import { useState } from "react";
import StreamingError from "./StreamingError";

const StreamingGrid = ({ category }) => {
  const [isNeededToRefresh, setisNeededToRefresh] = useState(0);
  const { ranking, message, httpStatus } = useFetchRankingTop10(
    category,
    isNeededToRefresh
  );

  const title = category === "" ? "All genre" : category;
  const isRestSucessfull = httpStatus === 200 && ranking !== undefined ? true : false;

  return (
    <>
      <h2>{title}</h2>
      {isRestSucessfull ? (
        ranking.map((data) => (
          <StreamingGridItem
            key={data.id}
            url={data.imageUrl}
            title={data.movieName}
            setisNeededToRefresh={setisNeededToRefresh}
          ></StreamingGridItem>
        ))
      ) : (
        <StreamingError message={message}></StreamingError>
      )}
    </>
  );
};

export default StreamingGrid;
