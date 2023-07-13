import Card from "../Card";
import "./style.css";
import NoCard from "./Incons/nocard.svg";
import ButtonFiltrarEntrada from "../ButtonFilterEntry";
import ButtonFiltrarTodos from "../ButtonFiltrarTodos";
import ButtonDespesa from "../ButtonDespesa";

function List({
  listTransactions,
  filterList,
  setListTransactions,
  setFilterList,
}) {
  return (
    <>
      <div className="containerList">
        <div className="containerHigher">
          <p className="textTitleList">Resumo fianceiro</p>
          <div className="containerButtons">
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
        </div>
        <ul className="containerCard">
          {filterList.length > 0 ? (
            filterList.map((elemente, indice) => {
              return (
                <li key={indice} className="listCard">
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
                <img src={NoCard} alt={""} className="noCard" />
              </li>
              <li>
                <img src={NoCard} alt={""} className="noCard" />
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default List;
