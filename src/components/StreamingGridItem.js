import "../css/StreamingGridItem.css";
import { saveLike } from "../utils/saveLike";
import StreamingGridItemImageDescription from "./StreamingGridItemImage&Descritpion";

const StreamingGridItem = ({ data, setisNeededToRefresh }) => {
  const handleOnClick = () => {
    saveLike(data.movieName);
    setTimeout(() => {
      setisNeededToRefresh(Math.random());
    }, 100);
  };
  return (
    <>
      <tr>
        <th scope="row">{data.position}</th>
        <td>
          <StreamingGridItemImageDescription data={data}></StreamingGridItemImageDescription>
        </td>
        <td>
          <p>{data.likes}</p>
        </td>
        <td>
          <button onClick={handleOnClick}>Like</button>
        </td>
      </tr>
    </>
  );
};

export default StreamingGridItem;
