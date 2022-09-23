export const ListFilter = ({ handleAll, handleAppetizer, handleExpenses }) => {
  return (
    <>
      <h2>Resumo financeiro</h2>
      <div>
        <button onClick={handleAll} type="button">
          Todos
        </button>
        <button onClick={handleAppetizer} type="button">
          Entradas
        </button>
        <button onClick={handleExpenses} type="button">
          Despesas
        </button>
      </div>
    </>
  );
};
