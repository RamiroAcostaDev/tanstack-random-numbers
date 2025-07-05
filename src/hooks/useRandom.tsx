import { useQuery } from "@tanstack/react-query";
//Custom hook para manejar la consulta de un número aleatorio y encapsular la lógica de la consulta

//URL del numero ramdom: https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new
const getRandomNumber = async (): Promise<number> => {
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());
  return Number(resp);
};

export const useRandom = () => {
  const randomNumberQuery = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumber,
  });

  return {
    randomNumberQuery,
  };
};
