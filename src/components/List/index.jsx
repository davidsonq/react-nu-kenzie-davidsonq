import { useState } from "react";
import { Card } from "../Card";
import { ListFilter } from "../ListFilter";
export const List = ({ listTransactions, setListTransactions }) => {
  const filterTransactions = (e) => {
    setListTransactions([
      ...listTransactions.filter(({ id }) => id !== Number(e.target.id)),
    ]);
  };
  const [filter, setFilter] = useState([...listTransactions]);
  const handleAll = () => {
    setFilter([...listTransactions]);
  };
  const handleAppetizer = () => {
    setFilter([...listTransactions.filter(({ type }) => type === "entrada")]);
  };
  const handleExpenses = () => {
    setFilter([...listTransactions.filter(({ type }) => type === "saída")]);
  };
  return (
    <div>
      <div>
        <ListFilter
          handleAll={handleAll}
          handleAppetizer={handleAppetizer}
          handleExpenses={handleExpenses}
        />
      </div>
      <ul>
        {!!listTransactions.length ? (
          filter.map((transaction) => (
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
