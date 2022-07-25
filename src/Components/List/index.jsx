import Card from "../Card";
import "./style.css";
import NoCard from "./Incons/nocard.svg";

function List({ listTransactions }) {
  return (
    <>
      <div>
        <div className="containerHigher">
          <p className="textTitleList">Resumo fianceiro</p>
          <button className="buttonList">Todos</button>
          <button className="buttonList">Entradas</button>
          <button className="buttonList">Despesas</button>
        </div>
        <ul>
          {listTransactions.length > 0 ? (
            listTransactions.map((elemente, indice) => {
              return (
                <li key={indice}>
                  <Card transactions={elemente} indice={indice} />
                </li>
              );
            })
          ) : (
            <>
              <li>
                <p>Você ainda não possui nenhum lançamento</p>
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
