import "./App.css";
import { useState, useEffect } from "react";

//URL del numero ramdom: https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

//SIN TANSTAMP QUERY: Petición tradicional a la API de random.org para obtener un número aleatorio entre 1 y 500, utilizando useEffect, fetch y useState.
function App() {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  3;
  const [refreshToken, setRefreshToken] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    )
      .then((resp) => resp.json())
      .then((data) => setNumber(data))
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [refreshToken]);

  return (
    <>
      {isLoading ? <h1>Cargando</h1> : <h1>Número : {number}</h1>}
      <div>{error}</div>
      <button
        disabled={isLoading}
        onClick={() => setRefreshToken(refreshToken + 1)}
      >
        Nuevo Numero
      </button>
    </>
  );
}

export default App;
