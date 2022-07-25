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
        <div className="left-block">
          <img src={nukenzie} className="logo" />
          <p className="main-text">Centralize o controle das suas finanças</p>
          <p>de forma rápida e segura</p>
          <button onClick={changePage} className="buttonIndex">
            Iniciar
          </button>
        </div>
        <div className="right-block">
          <img src={image} className="card" />
        </div>
      </div>
    </>
  );
}

export default index;
