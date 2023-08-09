"use client";
import Image from "next/image";
import React from "react";

const Card = ({ movie }) => {
  return (
    <div className='group/card card w-[80%] mx-auto sm:m-3  sm:w-auto bg-base-100 shadow-xl h-96 image-full relative'>
      <figure className='relative w-full p-1 '>
        <Image
          alt='Movie'
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`}
          fill
          className='group-hover/card:scale-150 duration-500'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title group-hover/card:text-primary'>
          {movie.title}
        </h2>
        {/* <p>{movie.overview}</p> */}
        <div className='card-actions absolute bottom-4 right-3 '>
          <button className='btn btn-primary '>More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
