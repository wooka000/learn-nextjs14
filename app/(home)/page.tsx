import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

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
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
