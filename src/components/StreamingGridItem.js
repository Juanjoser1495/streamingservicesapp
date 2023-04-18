import "../css/StreamingGridItem.css";
import { saveLike } from "../utils/saveLike";

const StreamingGridItem = ({ url, title, setisNeededToRefresh, likes }) => {
  const handleOnClick = () => {
    saveLike(title);
    setTimeout(() => {
      setisNeededToRefresh(Math.random());
    }, 100);
  };
  return (
    <>
     <tr>
      <th scope="row">1</th>
      <td> <p>{title}</p></td>
      <td><p>{likes}</p></td>
      <td><img className="width height paddingTop paddingBottom" src={url} alt={title}></img></td>
      <td><button onClick={handleOnClick}>Like</button></td>
    </tr>
      
    </>
  );
};

export default StreamingGridItem;
