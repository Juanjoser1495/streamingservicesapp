import StreamingSearchCategory from "./StremingSearchCategory";
import StreamingGrid from "./StreamingGrid";
import { useState } from "react";
import StreamingGridHead from "./StreamingGridHead";

const StreamingBody = () => {
  const [category, setCategory] = useState("");
  return (
    <>
      <StreamingSearchCategory setCategory={setCategory}></StreamingSearchCategory>
      <StreamingGridHead category={category}></StreamingGridHead>
      <StreamingGrid category={category}></StreamingGrid>
    </>
  );
};

export default StreamingBody;
