import { useState } from "react";

function ButtonFiltrarEntrada({ listTransactions, setFilterList, filterList }) {
  function filtrarEntrada() {
    const listaFiltrada = listTransactions.filter(
      (elem) => elem.type === "entrada"
    );
    setFilterList(listaFiltrada);
    console.log(listaFiltrada);
  }

  return (
    <button className="buttonList" onClick={filtrarEntrada}>
      Entradas
    </button>
  );
}

export default ButtonFiltrarEntrada;
