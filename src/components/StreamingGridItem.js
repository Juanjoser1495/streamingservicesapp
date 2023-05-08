import { saveLike } from "../utils/saveLike";
import { saveDislike } from "../utils/saveDislike";
import StreamingGridItemImageDescription from "./StreamingGridItemImage&Descritpion";
import "../css/StreamingGridItem.css";

const StreamingGridItem = ({ data, setisNeededToRefresh }) => {
  const handleOnClickLike = () => {
    saveLike(data.movieName);
    setTimeout(() => {
      setisNeededToRefresh(Math.random());
    }, 100);
  };

  const handleOnClickDislike = () => {
    saveDislike(data.movieName);
    setTimeout(() => {
      setisNeededToRefresh(Math.random());
    }, 100);
  };

  return (
    <>
      <tr>
        <th className="centerRow" scope="row">
          {data.position}
        </th>
        <td>
          <StreamingGridItemImageDescription data={data}></StreamingGridItemImageDescription>
        </td>
        <td className="centerRow">
          <p>{data.likes}</p>
        </td>
        <td className="centerRow">
          <button className="mb-1" onClick={handleOnClickLike}>
            Like
          </button>
          <button onClick={handleOnClickDislike}>Dislike</button>
        </td>
      </tr>
    </>
  );
};

export default StreamingGridItem;
