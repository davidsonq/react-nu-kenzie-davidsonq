export const Card = ({ transaction, filterTransactions }) => {
  return (
    <li>
      <div>
        <h2>{transaction.description}</h2>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(Math.abs(transaction.value))}
        </p>
        <button onClick={filterTransactions} id={transaction.id} type="button">
          Lixo
        </button>
      </div>
      {transaction.type === "entrada" ? (
        <span>Entrada</span>
      ) : (
        <span>Despesa</span>
      )}
    </li>
  );
};
