import Image from 'next/image';
import React from 'react'
async function getMovie(movieId){
  
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
      );
      return await res.json()
}
export default async function MoviePage({ params }) {
    const movieId = params.id
    const movie = await getMovie(movieId);
  return (
    <div className='w-full'>
     <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-7xl mx-auto md:space-x-6'>
     <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_paath}`} width={500} style={{maxWidth: "100%", height: "100%"}}className='rounded-lg' height={300} placeholder='blur' blurDataURL='/Rolling-1s-200px (1).svg' alt='image not found'/> 
     <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
          <p className='text-lg mb-3'><span className='mr-1 font-semibold'>Overview:</span>{movie.overview}</p>
          <p className='mb-3'><span className='mr-1 font-semibold'>Date Released:</span>{movie.release_date || movie.first_air_date}</p>
          <p className='mb-3'><span className='mr-1 font-semibold'>Rating:</span>{movie.vote_count}</p>
        </div>

     </div>
    </div>
  )
}
