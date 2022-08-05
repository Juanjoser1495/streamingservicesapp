const StreamingError = ({ message }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>

          <p className="lead">{message}</p>
          <a href="index.html" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </>
  );
};
export default StreamingError;
