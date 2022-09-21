import { Card } from "../Card";
export const List = ({ listTransactions, setListTransactions }) => {
  const filterTransactions = (e) => {
    setListTransactions([
      ...listTransactions.filter(({ id }) => id !== Number(e.target.id)),
    ]);
  };
  return (
    <div>
      <ul>
        {!!listTransactions.length ? (
          listTransactions.map((transaction) => (
            <Card
              filterTransactions={filterTransactions}
              transaction={transaction}
              key={transaction.id}
            />
          ))
        ) : (
          <li>
            <h1>Você ainda não possui nenhum lançamento</h1>
          </li>
        )}
      </ul>
    </div>
  );
};
