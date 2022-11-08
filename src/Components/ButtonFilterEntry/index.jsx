function ButtonFiltrarEntrada({ listTransactions, setFilterList }) {
  function filtrarEntrada() {
    const listaFiltrada = listTransactions.filter(
      (elem) => elem.type === "entrada"
    );
    setFilterList(listaFiltrada);
  }

  return (
    <button
      className="buttonList buttonEntryOrExpense"
      onClick={filtrarEntrada}
    >
      Entradas
    </button>
  );
}

export default ButtonFiltrarEntrada;
