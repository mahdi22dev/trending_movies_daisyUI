import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-11'>
      <h1 className=' text-2xl lg:text-4xl mb-5 text-center md:text-left'>
        See All trending Movies and Tv shows
      </h1>
      <Link
        className='btn text-xs md:text-lg md:btn-lg  btn-secondary btn-outline'
        href={"/trending"}
      >
        Trending
      </Link>
    </main>
  );
}
