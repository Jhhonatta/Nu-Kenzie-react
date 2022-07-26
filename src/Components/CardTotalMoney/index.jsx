import "./style.css";

function Somatorio({ listTransactions }) {
  const soma = listTransactions.reduce(
    (previousValue, currentValue) => currentValue.value + previousValue,
    0
  );
  return (
    <div className="containerSomer">
      <div className="containerValueSome">
        <p className="textBalance">Valor total:</p>
        <p className="priceBalance">{`R$ ${soma}`}</p>
      </div>
      <p className="textExplanatoryBalance">O valor se refere ao saldo</p>
    </div>
  );
}

export default Somatorio;
