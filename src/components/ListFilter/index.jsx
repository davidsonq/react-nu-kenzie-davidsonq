import { useState } from "react";
import "./style.css";
export const ListFilter = ({ handleAll, handleAppetizer, handleExpenses }) => {
  const [pink, setPink] = useState(1);
  return (
    <>
      <h2>Resumo financeiro</h2>
      <div>
        <button
          id={pink === 1 ? "modifere--pink" : ""}
          onClick={() => {
            handleAll();
            setPink(1);
          }}
          type="button"
        >
          Todos
        </button>
        <button
          id={pink === 2 ? "modifere--pink" : ""}
          onClick={() => {
            handleAppetizer();
            setPink(2);
          }}
          type="button"
        >
          Entradas
        </button>
        <button
          id={pink === 3 ? "modifere--pink" : ""}
          onClick={() => {
            handleExpenses();
            setPink(3);
          }}
          type="button"
        >
          Despesas
        </button>
      </div>
    </>
  );
};
