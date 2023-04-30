import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from "react-icons/fi";
import imageNotFound from "../../public/image-not-found-1-scaled.png"
const Card = ({result}) => {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border dark:hover:shadow-slate-500 sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${result.id}`}>

        <Image src={result.backdrop_path ?  `https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}` : imageNotFound} width={500} style={{maxWidth: "100%", height: "auto"}}className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 h-[300px] width-full object-cover' height={300} placeholder='blur' blurDataURL='/Rolling-1s-200px (1).svg' alt='image not found'/>

        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{result.overview}</p>
          <h2 className='font-bold truncate text-lg'>{result.title || result.name}</h2>
          <p className='flex items-center'>{result.release_date || result.first_air_date}
          <FiThumbsUp className='h-5 mr-1 ml-3'/>
          {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
