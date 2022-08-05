import "../css/StreamingGridItem.css";

const StreamingGridItem = ({ url, title }) => {
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
            <button>Test2</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreamingGridItem;
