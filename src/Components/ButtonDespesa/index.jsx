function ButtonDespesa({ listTransactions, setFilterList, filterList }) {
  function filtrarDespesa() {
    const listaFiltrada = listTransactions.filter(
      (elem) => elem.type === "saída"
    );
    setFilterList(listaFiltrada);
  }

  return (
    <button className="buttonList" onClick={filtrarDespesa}>
      Despesas
    </button>
  );
}

export default ButtonDespesa;
