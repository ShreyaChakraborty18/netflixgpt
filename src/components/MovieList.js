import React, { useState } from 'react';
import MovieCard from './MovieCard';
import YouTube from 'react-youtube';

const MovieList = ({ title, movies }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const options = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }


  const handleTrailerUrlChange = (trailerId) => {
    
    if(trailerUrl){
      setTrailerUrl('');
    }
    else{
      setTrailerUrl(trailerId);
    }
  };

  return (
    <div className='px-0 md:px-2 lg:px-4 lg:-pb-5'>
      <i><h1 className='text-xl md:text-xl lg:text-2xl py-2 md:mt-6 text-white'>{title}</h1></i>
      <div className='flex no-scrollbar overflow-x-auto'>
        <div className='flex'>
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              posterPath={movie?.poster_path}
              onTrailerUrlChange={handleTrailerUrlChange}
            />
          ))}
        </div>
      </div>
      <div style={{ padding: "25px" }}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
    </div>
  );
};

export default MovieList;
