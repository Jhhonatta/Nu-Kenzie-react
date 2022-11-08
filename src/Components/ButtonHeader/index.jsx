import "./style.css";

function ButtonHeader({ setHomePage }) {
  return (
    <button
      onClick={() => {
        setHomePage(true);
      }}
    >
      Inicio
    </button>
  );
}

export default ButtonHeader;
