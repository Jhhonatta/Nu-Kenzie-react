import { useState } from "react";
import "./style.css";

function Form({ setListTransactions, listTransactions }) {
  const [input, setInput] = useState("");

  //   function handlerInput(event) {
  //     event.preventDefault();
  //   }
  return (
    <form>
      <label>Descrição</label>
      <input
        placeholder="Digite aqui sua descrição"
        value={input}
        className="inputText"
      />
      <p>Ex: Compra de roupas</p>
      <div className="containerSelect">
        <div className="selectLeft">
          <label>Valor</label>
          <input placeholder="1" className="inputValue" />
        </div>
        <div className="selectRight">
          <label>Tipo de valor</label>
          <select>
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </div>
      </div>
      <button className="buttonForm">Inserir valor</button>
    </form>
  );
}

export default Form;
