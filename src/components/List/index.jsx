import { useState } from "react";
import { Card } from "../Card";
import { ListFilter } from "../ListFilter";
export const List = ({
  listTransactions,
  setListTransactions,
  setList,
  list,
}) => {
  const filterTransactions = (e) => {
    setListTransactions([
      ...listTransactions.filter(({ id }) => id !== Number(e.target.id)),
    ]);
    setFilterAll([...filterAll.filter(({ id }) => id !== Number(e.target.id))]);
  };
  const filterAppetizer = listTransactions.filter(
    ({ type }) => type === "entrada"
  );
  const filterExpenses = listTransactions.filter(
    ({ type }) => type === "saída"
  );
  const [filterAll, setFilterAll] = useState(listTransactions);
  const [text, setText] = useState("");
  const handleAll = () => {
    setList(false);
    setFilterAll([...listTransactions]);
  };

  const handleAppetizer = () => {
    setList(false);
    setFilterAll([...filterAppetizer]);
    setText("entrada");
  };

  const handleExpenses = () => {
    setList(false);
    setFilterAll([...filterExpenses]);
    setText("despesa");
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
        <>
          {!listTransactions.length ? (
            <li>
              <h2>Você ainda não possui nenhum lançamento</h2>
            </li>
          ) : (
            <>
              {list ? (
                listTransactions.map((transaction) => (
                  <Card
                    filterTransactions={filterTransactions}
                    transaction={transaction}
                    key={transaction.id}
                  />
                ))
              ) : (
                <>
                  {!filterAll.length ? (
                    <li>
                      <h2>Você não tem nenhuma {text}</h2>
                    </li>
                  ) : (
                    filterAll.map((transaction) => (
                      <Card
                        filterTransactions={filterTransactions}
                        transaction={transaction}
                        key={transaction.id}
                      />
                    ))
                  )}
                </>
              )}
            </>
          )}
        </>
      </ul>
    </div>
  );
};
