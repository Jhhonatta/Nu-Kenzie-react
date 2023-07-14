import nukenzie from "./Icons/nukenzietelainicial.svg";
import image from "./Icons/image.svg";
import "./style.css";

function index({ setHomePage }) {
  function changePage() {
    setHomePage(false);
  }
  return (
    <>
      <div className="container">
        <div className="fullBlock">
          <div className="blockTextAndImag">
            <div>
              <img src={nukenzie} className="logo" alt="logo" />
              <p className="mainText">
                Centralize o controle das suas finanças
              </p>
              <p className="textBottom">de forma rápida e segura</p>
            </div>
            <div className="blockCard">
              <img src={image} className="card" alt="card" />
            </div>
          </div>
          <div className="containerButton">
            <button onClick={changePage} className="buttonIndex">
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
