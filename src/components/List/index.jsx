import { useState } from "react";
import { Card } from "../Card";
import "./style.css";
import { ListFilter } from "../ListFilter";
import NoCard from "../../NoCard.svg";
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
    <aside>
      <div className="aside__container">
        <ListFilter
          handleAll={handleAll}
          handleAppetizer={handleAppetizer}
          handleExpenses={handleExpenses}
        />
      </div>
      <ul className="list__linha">
        <>
          {!listTransactions.length ? (
            <li className="list__NoText">
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={NoCard} alt="Carregando" />
              <img src={NoCard} alt="Carregando" />
              <img src={NoCard} alt="Carregando" />
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
                    <li className="list__NoOption">
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
    </aside>
  );
};
