import "../css/StreamingGridItem&Description.css";

const StreamingGridItemImageDescription = ({ data }) => {
  return (
    <>
      <div className="d-flex flex-row">
        <div>
          <img className="width height" src={data.imageUrl} alt={data.movieName}></img>
        </div>
        <div className="pl-3">
          <h5>Title:</h5>
          <p className="mb-1">{data.movieName}</p>
          <h5>Descritpion:</h5>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default StreamingGridItemImageDescription;
