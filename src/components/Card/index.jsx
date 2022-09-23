import "./style.css";
import trash from "../../trash.svg";
export const Card = ({ transaction, filterTransactions }) => {
  return (
    <li
      className={
        transaction.type === "entrada"
          ? "list__Text list--modifere-green"
          : "list__Text list--modifere-normal"
      }
    >
      <div>
        <h2>{transaction.description}</h2>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(Math.abs(transaction.value.replace(",", ".")))}
        </p>
        <button type="button">
          <img
            onClick={filterTransactions}
            id={transaction.id}
            src={trash}
            alt="Trash"
          />
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
