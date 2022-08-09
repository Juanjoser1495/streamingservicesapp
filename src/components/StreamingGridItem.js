import "../css/StreamingGridItem.css";
import { saveLike } from "../utils/saveLike";

const StreamingGridItem = ({ url, title }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    saveLike(title);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm centerContent">
              <img className="maxWidth maxHeight" src={url} alt={title}></img>
            </div>
            <div className="col-sm centerContent">
              <p>{title}</p>
            </div>
            <div className="col-sm centerContent">
              <button type="submit">Like</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default StreamingGridItem;
