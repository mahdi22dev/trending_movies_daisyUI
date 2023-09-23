import MovieList from "@/components/MovieList";
import { fetchTrending } from "@/utils/utils";
import Link from "next/link";

export default async function page() {
  // add pagination see more button then
  const movies = await fetchTrending();

  return (
    <main className='flex min-h-[80vh] flex-col items-center justify-center gap-4 p-10'>
      <Link
        className='btn text-xs md:text-lg md:btn-lg  btn-secondary btn-outline'
        href={"/"}
      >
        Back to Home page
      </Link>
      <h1 className=' text-2xl lg:text-4xl mb-5  text-center md:text-left'>
        List of trending Movies and Tv shows in this week
      </h1>

      <MovieList movies={movies} />
    </main>
  );
}
