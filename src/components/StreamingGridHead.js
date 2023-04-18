import "../css/StreamingGridHead.css";
import { formatTitleHead } from "../utils/formatTitleHead";

const StreamingGridHead = ({ category }) => {
  const title = formatTitleHead(category === "" ? "All genre" : category);
  return (
    <>
      <h2 className="centerContentHead">{title}</h2>
    </>
  );
};

export default StreamingGridHead;
