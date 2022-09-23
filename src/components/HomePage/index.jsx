import "./style.css";
import NuKenzie from "../../Nu Kenzie.svg";
export const HomePage = ({ handleHome, illustration }) => {
  return (
    <>
      <div className="main__container">
        <h1>
          <img src={NuKenzie} alt="Logo" />
        </h1>
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button onClick={handleHome} type="button">
          Iniciar
        </button>
      </div>
      <figure className="main__figure">
        <img src={illustration} alt="Imagem" />
      </figure>
    </>
  );
};
