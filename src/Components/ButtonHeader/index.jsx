import "./style.css";

function ButtonHeader({ setHomePage }) {
  function changeIndex() {
    setHomePage(true);
  }

  return <button onClick={changeIndex}>Inicio</button>;
}

export default ButtonHeader;
