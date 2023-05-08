const StreamingGenreRankItem = ({ nameGenre, numberOfLikes }) => {
  return (
    <>
      <tr>
        <td>{nameGenre}</td>
        <td>{numberOfLikes}</td>
      </tr>
    </>
  );
};

export default StreamingGenreRankItem;
