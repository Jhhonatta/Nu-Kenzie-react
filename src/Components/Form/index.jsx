import { useState } from "react";
import "./style.css";

function Form({ setListTransactions, listTransactions }) {
  function handlerInput(event) {
    event.preventDefault();
    setListTransactions([
      ...listTransactions,
      {
        description: event.nativeEvent.path[1][0].value,
        type: event.nativeEvent.path[1][2].value,
        value: +event.nativeEvent.path[1][1].value,
      },
    ]);
    console.log(event.nativeEvent.path[1][2].value);
    console.log(listTransactions);
  }
  return (
    <form>
      <label>Descrição</label>
      <input placeholder="Digite aqui sua descrição" className="inputText" />
      <p>Ex: Compra de roupas</p>
      <div className="containerSelect">
        <div className="selectLeft">
          <label>Valor</label>
          <input placeholder="1" className="inputValue" />
        </div>
        <div className="selectRight">
          <label>Tipo de valor</label>
          <select>
            <option value={"entrada"}>Entrada</option>
            <option value={"saída"}>Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit" className="buttonForm" onClick={handlerInput}>
        Inserir valor
      </button>
    </form>
  );
}

export default Form;
