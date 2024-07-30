import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep aqui"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 79003222</h2>

        <span>Rua teste</span>
        <span>Complemento teste</span>
        <span>Bairro teste</span>
        <span>Cidade teste</span>
      </main>
    </div>
  );
}

export default App;
