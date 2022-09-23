import "./style.css";
import NuKenzieB from "../../Nu KenzieBlack.svg";
export const Header = ({ handlePage }) => {
  return (
    <header className="cabecalho">
      <div>
        <h1>
          <img src={NuKenzieB} alt="Logo" />
        </h1>
        <button onClick={handlePage} type="button">
          Início
        </button>
      </div>
    </header>
  );
};
