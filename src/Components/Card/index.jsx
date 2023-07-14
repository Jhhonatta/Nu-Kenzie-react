import "./style.css";
import ButtonDelete from "../ButtonDelete";

function Card({
  transactions,
  indice,
  listTransactions,
  setListTransactions,
  setFilterList,
}) {
  return transactions.type === "entrada" ? (
    <>
      <div className="containerSupreme" key={indice}>
        <div className="containerGrey">
          <div className="containerSideGreen"></div>
          <div className="blockLeft">
            <p className="titleCard">
              {transactions.description.toUpperCase()}
            </p>
            <p>Entrada</p>
          </div>
          <div className="blockRight">
            <p className="priceCard">{`R$ ${transactions.value}`}</p>
            <ButtonDelete
              listTransactions={listTransactions}
              indice={indice}
              setListTransactions={setListTransactions}
              setFilterList={setFilterList}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="containerSupreme" key={indice}>
        <div className="containerGrey">
          <div className="containerSideGrey"></div>
          <div className="blockLeft">
            <p className="titleCard">
              {transactions.description.toUpperCase()}
            </p>
            <p>Despesa</p>
          </div>
          <div className="blockRight">
            <p className="priceCard">{`R$ ${-1 * transactions.value}`}</p>
            <ButtonDelete
              listTransactions={listTransactions}
              indice={indice}
              setListTransactions={setListTransactions}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
