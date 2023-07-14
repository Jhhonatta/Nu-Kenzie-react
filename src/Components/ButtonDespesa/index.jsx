import "./style.css";
function ButtonDespesa({ listTransactions, setFilterList, filterList }) {
  function filtrarDespesa() {
    const listaFiltrada = listTransactions.filter(
      (elem) => elem.type === "saída"
    );
    if (listaFiltrada.length > 0) {
      setFilterList(listaFiltrada);
    }
  }

  return (
    <button
      className="buttonList buttonEntryOrExpense"
      onClick={filtrarDespesa}
    >
      Despesas
    </button>
  );
}

export default ButtonDespesa;
