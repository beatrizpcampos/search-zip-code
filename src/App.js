import { FiSearch } from "react-icons/fi";

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
        <h2>
        </h2>
      </main>
    </div>
  );
}

export default App;
