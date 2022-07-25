import "./reset.css";
import "./App.css";
import { useState } from "react";
import Nukenzie from "./Icons/NuKenzie.svg";
import Index from "./Components/Index";
import ButtonHeader from "./Components/ButtonHeader";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [homePage, setHomePage] = useState(true);

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return homePage ? (
    <Index setHomePage={setHomePage} />
  ) : (
    <>
      <header className="App-header">
        <img src={Nukenzie} className="imgLogo" />
        <ButtonHeader setHomePage={setHomePage} />
      </header>
      <main>
        <Form />
        <List listTransactions={listTransactions} />
      </main>
    </>
  );
}

export default App;
