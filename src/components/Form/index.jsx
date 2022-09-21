import { useState } from "react";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [count, setCount] = useState(listTransactions.length + 2);
  const [useInput, setUseInput] = useState({
    id: listTransactions.length + 1,
    description: "",
    type: "entrada",
    value: "",
  });
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="description">Descrição</label>
      <input
        required
        onChange={(e) => {
          setUseInput({ ...useInput, description: e.target.value });
        }}
        value={useInput.description}
        type="text"
        placeholder="Digite aqui sua descrição"
        id="description"
        name="description"
      />
      <label htmlFor="description">Ex: Compra de roupas</label>
      <div>
        <div>
          <label htmlFor="value">Valor</label>
          <input
            required
            onChange={(e) => {
              useInput.type === "entrada"
                ? setUseInput({
                    ...useInput,
                    value: Math.abs(Number(e.target.value)),
                  })
                : setUseInput({
                    ...useInput,
                    value: -1 * Math.abs(Number(e.target.value)),
                  });
            }}
            value={useInput.value}
            type="number"
            placeholder="0"
            id="value"
            name="value"
          />
        </div>
        <div>
          <label htmlFor="type">Tipo de valor</label>
          <select
            required
            onChange={(e) => {
              e.target.value === "saída"
                ? setUseInput({
                    ...useInput,
                    type: e.target.value,
                    value: -1 * useInput.value,
                  })
                : setUseInput({
                    ...useInput,
                    type: e.target.value,
                    value: Math.abs(useInput.value),
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
        onClick={() => {
          setCount(count + 1);
          setUseInput({ ...useInput, id: count });

          !!useInput.description &&
            setListTransactions([...listTransactions, useInput]);
        }}
        type="submit"
      >
        Inserir valor
      </button>
    </form>
  );
};
