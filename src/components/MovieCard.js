import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import movieTrailer from "movie-trailer";

const MovieCard = ({ posterPath, movie, onTrailerUrlChange }) => {
  const handleClick = async (movie) => {
    try {
      const url = await movieTrailer(movie?.title || "");
      const urlParams = new URLSearchParams(new URL(url).search);
      const trailerId = urlParams.get("v");
      onTrailerUrlChange(trailerId); 
    } catch (error) {
      console.log(error);
    }
  };

  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 hover:cursor-pointer">
      <img
        className="rounded-sm hover:border border-gray-400"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        onClick={() => handleClick(movie)}
      />
    </div>
  );
};

export default MovieCard;
