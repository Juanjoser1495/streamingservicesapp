import StreamingFooter from "./components/StreamingFooter";
import StreamingGrid from "./components/StreamingGrid";
import StreamingNavbar from "./components/StreamingNavbar";
import StreamingSearchCategory from "./components/StremingSearchCategory";
import { useState } from "react";

const StreamingApp = () => {
  const [category, setCategory] = useState("action");

  return (
    <>
      <StreamingNavbar></StreamingNavbar>
      <StreamingSearchCategory setCategory={setCategory}></StreamingSearchCategory>
      <StreamingGrid category={category}></StreamingGrid>
      <StreamingFooter></StreamingFooter>
    </>
  );
};

export default StreamingApp;
