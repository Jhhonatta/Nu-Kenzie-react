import Card from "../Card";
import "./style.css";
import NoCard from "./Incons/nocard.svg";
import ButtonFiltrarEntrada from "../ButtonFilterEntrada";
import ButtonFiltrarTodos from "../ButtonFiltrarTodos";
import ButtonDespesa from "../ButtonDespesa";
import { useState } from "react";

function List({
  listTransactions,
  filterList,
  setListTransactions,
  setFilterList,
}) {
  return (
    <>
      <div>
        <div className="containerHigher">
          <p className="textTitleList">Resumo fianceiro</p>
          <ButtonFiltrarTodos
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setFilterList={setFilterList}
          />
          <ButtonFiltrarEntrada
            listTransactions={listTransactions}
            setFilterList={setFilterList}
            filterList={filterList}
          />

          <ButtonDespesa
            listTransactions={listTransactions}
            setFilterList={setFilterList}
            filterList={filterList}
          />
        </div>
        <ul>
          {filterList.length > 0 ? (
            filterList.map((elemente, indice) => {
              return (
                <li key={indice}>
                  <Card
                    transactions={elemente}
                    indice={indice}
                    filterList={filterList}
                    setFilterList={setFilterList}
                    setListTransactions={setListTransactions}
                    listTransactions={listTransactions}
                  />
                </li>
              );
            })
          ) : (
            <>
              <li className="listempty">
                <p className="textempty">
                  Você ainda não possui nenhum lançamento
                </p>
              </li>
              <li>
                <img src={NoCard} />
              </li>
              <li>
                <img src={NoCard} />
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default List;
