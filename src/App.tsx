import "./App.css";
import { useRandom } from "./hooks/useRandom";

//Aplicamos un Custom Hook para encapsular la lógica de la consulta y hacer el código más limpio y reutilizable.
function App() {
  const { randomNumberQuery } = useRandom();
  return (
    <>
      {randomNumberQuery.isFetching ? (
        <h1>Cargando</h1>
      ) : (
        <h1>Número : {randomNumberQuery.data}</h1>
      )}
      <div>{JSON.stringify(randomNumberQuery.error)}</div>
      <button
        disabled={randomNumberQuery.isFetching}
        onClick={() => randomNumberQuery.refetch()}
      >
        Nuevo Numero
      </button>
    </>
  );
}

export default App;
