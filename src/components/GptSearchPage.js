import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { background_img } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10 md:fixed lg:fixed xl:fixed">
        <img
          className="h-screen object-cover md:h-screen lg:h-screen xl:h-full"
          src={background_img}
          alt="background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
