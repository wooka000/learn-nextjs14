import { Metadata } from "next";
import Link from "next/link";

export const metaData: Metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(API_URL).then((response) => response.json());
}

export default async function page() {
  const movies = await getMovie();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
