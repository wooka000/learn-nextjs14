import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";

export default function page({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loaing movie info</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
