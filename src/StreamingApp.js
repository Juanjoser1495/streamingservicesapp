import StreamingBody from "./components/StreamingBody";
import StreamingFooter from "./components/StreamingFooter";
import StreamingNavbar from "./components/StreamingNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StreamingGenresRank from "./components/StreamingGenresRank";

const StreamingApp = () => {
  return (
    <>
      <StreamingNavbar></StreamingNavbar>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<StreamingBody />} />
            <Route path="/genres" element={<StreamingGenresRank />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <StreamingFooter></StreamingFooter>
    </>
  );
};

export default StreamingApp;
