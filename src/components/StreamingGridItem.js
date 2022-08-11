import "../css/StreamingGridItem.css";
import { saveLike } from "../utils/saveLike";

const StreamingGridItem = ({ url, title, setisNeededToRefresh }) => {
  const handleOnClick = () => {
    saveLike(title);
    setTimeout(() => {
      setisNeededToRefresh(Math.random());
    }, 100);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm centerContent">
            <img className="maxWidth maxHeight" src={url} alt={title}></img>
          </div>
          <div className="col-sm centerContent">
            <p>{title}</p>
          </div>
          <div className="col-sm centerContent">
            <button onClick={handleOnClick}>Like</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreamingGridItem;
