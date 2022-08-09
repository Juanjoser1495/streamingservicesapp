import "../css/StreamingGridItem.css";
import { saveLike } from "../utils/saveLike";

const StreamingGridItem = ({ url, title }) => {
  const handleOnClick = () => {
    saveLike(title);
    window.location.reload(false);
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
