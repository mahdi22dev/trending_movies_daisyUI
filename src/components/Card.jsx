"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import TextTruncate from "react-text-truncate";

const Card = ({ movie }) => {
  const { title, backdrop_path, overview, media_type, id } = movie;
  return (
    <div className='group/card card w-[90%] mx-auto sm:m-3  sm:w-auto bg-base-100 shadow-xl h-96 image-full relative'>
      <figure className='relative w-full p-1 '>
        <Image
          alt='Movie'
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${backdrop_path}`}
          fill
          className='group-hover/card:scale-150 duration-500'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title relative group-hover/card:text-primary group-hover/card:scale-110 group-hover/card:pl-1 text-md lg:text-2xl  after:bg-primary after:mt-2 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 group-hover/card:after:w-full after:transition-all after:duration-300  '>
          {title ?? "Title"}
        </h2>

        <p id='text' className=' max-w-xs h-12 mt-2'>
          <TextTruncate
            line={4}
            element='span'
            truncateText='…'
            text={overview}
            textTruncateChild={
              <a
                href={`https://www.themoviedb.org/${media_type}/${id}`}
                target='_blank'
                rel='noopener noreferrer'
                className='link link-primary'
              >
                Read More
              </a>
            }
          />
        </p>
        <div className='card-actions absolute bottom-4 right-3 '>
          <button className='btn btn-primary '>
            <a
              href={`https://www.themoviedb.org/${media_type}/${id}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              More Details
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
