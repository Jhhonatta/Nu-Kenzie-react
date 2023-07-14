import "./reset.css";
import "./App.css";
import { useEffect, useState } from "react";
import Nukenzie from "./Icons/NuKenzie.svg";
import Index from "./Components/Index";
import ButtonHeader from "./Components/ButtonHeader";
import Form from "./Components/Form";
import List from "./Components/List";
import Somatorio from "./Components/CardTotalMoney";

function App() {
  const [homePage, setHomePage] = useState(true);

  const [listTransactions, setListTransactions] = useState([]);

  const [filterList, setFilterList] = useState(listTransactions);

  useEffect(() => {
    setFilterList(listTransactions);
  }, [listTransactions]);

  return homePage ? (
    <Index setHomePage={setHomePage} />
  ) : (
    <>
      <div className="containerGeral">
        <header className="appHeader">
          <img src={Nukenzie} className="imgLogo" alt={""} />
          <div className="containerButtonHeader">
            <ButtonHeader setHomePage={setHomePage} />
          </div>
        </header>
        <main>
          <div className="containerForm">
            <Form
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
              setFilterList={setFilterList}
            />
            {listTransactions.length !== 0 ? (
              <Somatorio listTransactions={listTransactions} />
            ) : (
              false
            )}
          </div>

          <List
            listTransactions={listTransactions}
            filterList={filterList}
            setListTransactions={setListTransactions}
            setFilterList={setFilterList}
          />
        </main>
      </div>
    </>
  );
}

export default App;
