import "./style.css";

function Form({ setListTransactions, listTransactions, setFilterList }) {
  function handlerInput(event) {
    const transactionsDescription = event.nativeEvent.path[1][0].value;
    const transactionsType = event.nativeEvent.path[1][2].value;
    const transactionsValue =
      transactionsType === "entrada"
        ? +event.nativeEvent.path[1][1].value
        : -event.nativeEvent.path[1][1].value;

    event.preventDefault();
    setListTransactions([
      ...listTransactions,
      {
        description: transactionsDescription,
        type: transactionsType,
        value: transactionsValue,
      },
    ]);
    setFilterList(listTransactions);
  }
  return (
    <form>
      <label>Descrição</label>
      <input placeholder="Digite aqui sua descrição" className="inputText" />
      <p>Ex: Compra de roupas</p>
      <div className="containerSelect">
        <div className="selectLeft">
          <label>Valor</label>
          <input placeholder="Ex: 20" className="inputValue" />
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
