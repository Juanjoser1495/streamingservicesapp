import "../css/StreamingGridItem.css";
import { saveLike } from "../utils/saveLike";

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
          <p>{data.movieName}</p>
        </td>
        <td>
          <p>{data.likes}</p>
        </td>
        <td>
          <img
            className="width height paddingTop paddingBottom"
            src={data.imageUrl}
            alt={data.movieName}
          ></img>
        </td>
        <td>
          <button onClick={handleOnClick}>Like</button>
        </td>
      </tr>
    </>
  );
};

export default StreamingGridItem;
