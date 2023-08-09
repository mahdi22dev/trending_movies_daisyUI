"use client";
import React, { useEffect, useState, useTransition } from "react";
import Card from "./Card";
import { getRandomNumber } from "@/utils/utils";
import { loadMore } from "./actions";

const MovieList = ({ movies }) => {
  const [myMovies, setMyMovies] = useState(movies?.results);
  let [isPending, startTransition] = useTransition();
  let current = 1;
  const FetchClientData = async () => {
    const url2 = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${current}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU4NmFlNWYzMmEzYjVjYzdlOGZlYjQwZGUwNDJhMSIsInN1YiI6IjY0YTEyNTcxNGE1MmY4MDBhZjEyN2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbYwtxSpkX8VkKoghnxMD7rlXZiSFV6oFwd5iYwvBIY",
      },
    };
    const res = await fetch(url2, options);
    const data = await res.json();
    setMyMovies(data.results);
  };
  useEffect(() => {
    FetchClientData();
  }, []);

  return (
    <div className='w-full grid place-content-center'>
      <div className='max-w-7xl grid place-content-center grid-cols-1 lg:grid-cols-3 gap-4 mx-auto'>
        {myMovies?.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
      <button
        onClick={() =>
          startTransition(async () => {
            console.log(++current);
            const newdata = await loadMore(++current);
            const myMoviesArray = Array.isArray(myMovies) ? myMovies : [];
            const latest = [...myMoviesArray, ...newdata.results];
            console.log(latest);
            // console.log(newdata);
            // console.log(myMovies);
            setMyMovies(latest);
          })
        }
        className='btn btn-secondary btn-outline mx-auto mt-4'
      >
        {isPending ? "loading" : "  Load More"}
      </button>
    </div>
  );
};

export default MovieList;
