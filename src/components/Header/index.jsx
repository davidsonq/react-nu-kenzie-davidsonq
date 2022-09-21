export const Header = ({ handlePage }) => {
  return (
    <header>
      <h1>
        <a href="#">Nu Kenzie</a>
      </h1>
      <button onClick={handlePage} type="button">
        Início
      </button>
    </header>
  );
};
