//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
//Podemos aplicar configuraciones globales al cliente de consulta, como el tiempo de espera de las solicitudes, el número máximo de reintentos, etc.
// {
//   defaultOptions: {
//     queries: {
//       // No volver a solicitar los datos cuando la ventana vuelve a estar en foco.
//       refetchOnWindowFocus: false,
//       // Número máximo de reintentos en caso de error

//       retry: 1,
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
  //</React.StrictMode>
);
