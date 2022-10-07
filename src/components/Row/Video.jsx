import React, { useEffect, useState } from "react";
import { Instance } from "../../Instance";
import "./Video.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Video = ({ title, fetchUrl, isSmall }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await Instance.get(fetchUrl);
      setMovies(data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {});
    }
  };

  console.log(movies);
  return (
    <div>
      <h2 className="text-3xl text-white font-bold pb-4">{title}</h2>
      <div className="flex overflow-x-scroll overflow-y-hidden videos py-[20px]">
        {movies?.map((movie) => (
          <div key={movie.id} className="mx-[5px]">
            <img
              src={`${base_url}${isSmall ? movie.poster_path : movie.backdrop_path}`}
              onClick={() => handleMovie(movie)}
              alt=""
              className={`w-full ${isSmall ? "max-h-[250px]" : "max-h-[100px]"}    object-contain  transition
              duration-500 hover:scale-[1.2] cursor-pointer overflow-hidden`}
            />
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube className="py-4" videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Video;
