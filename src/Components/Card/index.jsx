import trash from "./Icons/trash.svg";
import "./style.css";

function Card({ transactions, indice }) {
  return transactions.type === "entrada" ? (
    <>
      <div className="containerSupreme" key={indice}>
        <div className="containerGrey">
          <div className="containerSideGreen"></div>
          <div className="block-left">
            <p className="titleCard">{transactions.description}</p>
            <p>Entrada</p>
          </div>
          <div className="block-right">
            <p className="priceCard">{`R$ ${transactions.value}`}</p>
            <img src={trash} className="imgTrash" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="containerSupreme" key={indice}>
        <div className="containerGrey">
          <div className="containerSideGrey"></div>
          <div className="block-left">
            <p className="titleCard">{transactions.description}</p>
            <p>Despesa</p>
          </div>
          <div className="block-right">
            <p className="priceCard">{`R$ ${-transactions.value}`}</p>
            <img src={trash} className="imgTrash" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
