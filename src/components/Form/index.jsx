import { useState } from "react";
import "./style.css";
export const Form = ({ listTransactions, setListTransactions, setList }) => {
  const [count, setCount] = useState(listTransactions.length + 2);
  const [useInput, setUseInput] = useState({
    id: listTransactions.length + 1,
    description: "",
    type: "entrada",
    value: "",
  });
  return (
    <form className="main__form" onSubmit={(e) => e.preventDefault()}>
      <label className="main__label--1" htmlFor="description">
        Descrição
      </label>
      <input
        className="main__input"
        value={useInput.description}
        onChange={(e) => {
          setUseInput({ ...useInput, description: e.target.value });
        }}
        type="text"
        placeholder="Digite aqui sua descrição"
        id="description"
        name="description"
      />
      <label className="main__label--2" htmlFor="description">
        Ex: Compra de roupas
      </label>
      <div className="main__container__value">
        <div>
          <label htmlFor="value">Valor</label>

          <input
            className="main__container__input__value"
            value={
              isNaN(Number(useInput.value.replace(",", ".")))
                ? ""
                : useInput.value
            }
            onChange={(e) => {
              setUseInput({
                ...useInput,
                value: e.target.value,
              });
            }}
            type="text"
            placeholder="0,00"
            id="value"
            name="value"
          />
          <label id="modifire--BRL" htmlFor="value">
            R$
          </label>
        </div>
        <div>
          <label htmlFor="type">Tipo de valor</label>
          <select
            onChange={(e) => {
              e.target.value === "saída"
                ? setUseInput({
                    ...useInput,
                    type: e.target.value,
                  })
                : setUseInput({
                    ...useInput,
                    type: e.target.value,
                  });
            }}
            id="type"
            name="type"
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button
        className="main__form__button"
        onClick={() => {
          setCount(count + 1);
          setUseInput({ ...useInput, id: count });

          !!useInput.description &&
            setListTransactions([...listTransactions, useInput]);
          setList(true);
          console.log(useInput);
          setUseInput({
            id: count,
            description: "",
            type: useInput.type,
            value: "",
          });
        }}
        type="submit"
      >
        Inserir valor
      </button>
    </form>
  );
};
