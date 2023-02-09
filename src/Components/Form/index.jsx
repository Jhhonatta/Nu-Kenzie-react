import "./style.css";
import { useState } from "react";

function Form({ setListTransactions, listTransactions, setFilterList }) {
  const [descrition, setDescrition] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function handlerInput() {
    const transactionsValue = value;

    setListTransactions([
      ...listTransactions,
      {
        description: descrition,
        type: type,
        value: +transactionsValue,
      },
    ]);
    setFilterList(listTransactions);
  }
  return (
    <form onSubmit={(event) => handlerInput(event.preventDefault())}>
      <label>Descrição</label>
      <input
        placeholder="Digite aqui sua descrição"
        className="inputText"
        onChange={(event) => setDescrition(event.target.value)}
      />
      <p>Ex: Compra de roupas</p>
      <div className="containerSelect">
        <div className="selectLeft">
          <label>Valor</label>
          <input
            placeholder="Ex: 20"
            className="inputValue"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="selectRight">
          <label>Tipo de valor</label>
          <select onChange={(event) => setType(event.target.value)}>
            <option value={"selecione"}>Selecione</option>
            <option value={"entrada"}>Entrada</option>
            <option value={"saída"}>Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit" className="buttonForm">
        Inserir valor
      </button>
    </form>
  );
}

export default Form;
