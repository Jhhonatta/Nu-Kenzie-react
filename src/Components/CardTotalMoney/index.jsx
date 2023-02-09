import "./style.css";

function Somatorio({ listTransactions }) {
  const treatingNumber = listTransactions.map((elem) =>
    elem.type === "saída" ? -elem.value : elem.value
  );

  const soma = treatingNumber.reduce(
    (previousValue, currentValue) => currentValue + previousValue,
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
