"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={handleClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
