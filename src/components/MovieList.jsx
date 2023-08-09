"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getRandomNumber } from "@/utils/utils";

const MovieList = ({ movies }) => {
  const [data, setData] = useState(movies);
  console.log(data);
  const random = getRandomNumber();
  const FetchClientData = async () => {
    const url2 = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${random}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU4NmFlNWYzMmEzYjVjYzdlOGZlYjQwZGUwNDJhMSIsInN1YiI6IjY0YTEyNTcxNGE1MmY4MDBhZjEyN2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbYwtxSpkX8VkKoghnxMD7rlXZiSFV6oFwd5iYwvBIY",
      },
    };
    const res = await fetch(url2, options, { cache: "noe-store" });
    const data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    FetchClientData();
  }, []);

  return (
    <div className='w-full'>
      <div className='max-w-7xl grid place-content-center grid-cols-1 lg:grid-cols-3 gap-4 mx-auto'>
        {data?.results.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
