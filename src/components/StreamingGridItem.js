import { useStatePhotos } from "../hooks/useFetchPhotos";

const StreamingGridItem = ({ url, title }) => {
  const { photos: data, loading } = useStatePhotos("nature", 1);
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src={data[0].urlPhoto} alt={data[0].title}></img>
          </div>
          <div className="col-sm">
            <p>{data[0].title}</p>
          </div>
          <div className="col-sm">
            <button>Test2</button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default StreamingGridItem;
