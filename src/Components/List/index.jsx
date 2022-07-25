import Card from "../Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <>
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
                <Card transactions={elemente} key={indice} />
              </li>
            );
          })
        ) : (
          <li>
            <p>Você ainda não possui nenhum lançamento</p>
          </li>
        )}
      </ul>
    </>
  );
}

export default List;
