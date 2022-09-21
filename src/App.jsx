import illustration from "./illustration.svg";
import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
const App = () => {
  const [listTransactions, setListTransactions] = useState([]);
  const [page, setPage] = useState(false);
  const handlePage = () => {
    setPage(false);
  };
  const handleHome = () => {
    setPage(true);
  };
  return !page ? (
    <div className="App">
      <HomePage handleHome={handleHome} illustration={illustration} />
    </div>
  ) : (
    <div>
      <Header handlePage={handlePage} />
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
      <List
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
      {!!listTransactions.length && (
        <TotalMoney
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
};

export default App;
