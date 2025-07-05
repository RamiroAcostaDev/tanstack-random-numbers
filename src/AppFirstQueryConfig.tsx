import { useQuery } from "@tanstack/react-query";
import "./App.css";

//URL del numero ramdom: https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

// Función asincrona que obtiene un número aleatorio de la API a través de una solicitud fetch
const getRandomNumber = async (): Promise<number> => {
  // Simulando un error para probar el manejo de errores:
  //Al tener un error, la consulta falla y se realizan los reintentos según la configuración del cliente de consulta. Si no se establece el numero de reintentos, se consulta un numero de veces y esto puede demorar.
  // throw "No se pudo obtener el número aleatorio";

  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());
  return Number(resp);
};

//CON TANSTAMP QUERY: reduce el código necesario para manejar el estado de la solicitud, como loading, error, etc.
// También maneja la caché de los datos, lo que significa que no se volverá a solicitar el número aleatorio si ya se ha obtenido anteriormente, a menos que se solicite explicitamente con refetch.

function App() {
  // Se elimina el uso de useState y useEffect, ya que tanstack-query maneja el estado de la solicitud automáticamente.

  const {
    //isFetching indica si la consulta está en proceso de actualización.
    isFetching,
    //data contiene los datos obtenidos de la consulta.
    data: number,
    //error contiene cualquier error que ocurra durante la consulta.
    error,
    //refetch es una función que se puede llamar para volver a solicitar los datos manualmente.
    // Esto es útil si queremos actualizar los datos sin esperar a que se cumpla el staleTime.
    // Por ejemplo, podemos usarla en un botón para obtener un nuevo número aleatorio
    refetch,
    //funcionalidades extras:
    //refetchOnWindowFocus: permite volver a solicitar los datos cuando la ventana vuelve a estar en foco. podemos definirla en false para evitar este comportamiento.
    //retry: permite definir el número de reintentos en caso de error. Si no se establece, se reintentará una vez por defecto.
    //isLoading, indica si la consulta está en proceso de carga.
  } = useQuery({
    //queryKey es una clave única para identificar la consulta.
    // También se puede usar un array como queryKey, lo que permite pasar múltiples parámetros si es necesario.
    queryKey: ["randomNumber"],
    //queryFn es la función que se ejecutará para obtener los datos.
    queryFn: getRandomNumber,
    //staleTime es el tiempo en milisegundos durante el cual los datos se consideran frescos y no se volverán a solicitar automáticamente.
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
  return (
    <>
      {isFetching ? <h1>Cargando</h1> : <h1>Número : {number}</h1>}
      <div>{JSON.stringify(error)}</div>
      <button disabled={isFetching} onClick={() => refetch()}>
        Nuevo Numero
      </button>
    </>
  );
}

export default App;
