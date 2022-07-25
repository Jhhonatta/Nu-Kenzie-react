import trash from "./Icons/trash.svg";
import "./style.css";

function Card({ transactions, key }) {
  return transactions.type === "entrada" ? (
    <>
      <div className="containerSupreme" key={key}>
        <div className="containerSideGreen"></div>
        <div className="containerGrey">
          <div className="left-block">
            <p>{transactions.description}</p>
            <p>{transactions.type}</p>
          </div>
          <div className="right-block">
            <p>{`R$ ${transactions.value}`}</p>
            <img src={trash} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="containerSupreme" key={key}>
        <div className="containerSideGrey"></div>
        <div className="containerGrey">
          <div className="left-block">
            <p>{transactions.description}</p>
            <p>{transactions.type}</p>
          </div>
          <div className="right-block">
            <p>{`R$ ${transactions.value}`}</p>
            <img src={trash} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
