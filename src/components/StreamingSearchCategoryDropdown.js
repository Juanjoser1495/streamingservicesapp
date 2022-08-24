const StreamingSearchCategoryDropdown = ({ textValue }) => {
  const value = textValue === "All genre" ? " " : textValue;
  return (
    <>
      <option value={value}>{textValue}</option>
    </>
  );
};
export default StreamingSearchCategoryDropdown;
