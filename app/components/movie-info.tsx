import { API_URL } from "../(home)/page";

async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error("Something is broken...");
  //   const response = await fetch(`${API_URL}/${id}`);
  //   return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
