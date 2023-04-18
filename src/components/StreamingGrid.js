import StreamingGridItem from "./StreamingGridItem";
import { useFetchRankingTop10 } from "../hooks/useFetchRankingTop10";
import { useState } from "react";
import StreamingError from "./StreamingError";

const StreamingGrid = ({ category }) => {
  const [isNeededToRefresh, setisNeededToRefresh] = useState(0);
  const { ranking, message, httpStatus } = useFetchRankingTop10(category, isNeededToRefresh);

  const isRestSucessfull = httpStatus === 200 && ranking !== undefined ? true : false;

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Movie/Serie</th>
            <th scope="col"># Likes</th>
            <th scope="col">Poster</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {isRestSucessfull ? (
            ranking.map((data) => (
              <StreamingGridItem
                key={data.id}
                url={data.imageUrl}
                title={data.movieName}
                setisNeededToRefresh={setisNeededToRefresh}
                likes={data.likes}
              ></StreamingGridItem>
            ))
          ) : (
            <StreamingError message={message}></StreamingError>
          )}
        </tbody>
      </table>
    </>
  );
};

export default StreamingGrid;
