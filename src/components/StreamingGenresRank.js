import { getGenreRanking } from "../utils/getGenreRanking";

const StreamingGenresRank = () => {
  const { status, ranking, httpStatus } = getGenreRanking();
  console.log(ranking);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <p className="lead">{JSON.stringify(ranking)}</p>
        <p className="lead">{ranking}</p>
        <p className="lead">{status}</p>
        <p className="lead">Lo que sea</p>
      </div>
    </>
  );
};
export default StreamingGenresRank;
