import React, { useState, useEffect } from "react";
import { Instance } from "../../Instance";
import { Requests } from "../../Requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const { data } = await Instance.get(Requests.fetchNetflixOriginals);
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
    }
    fetchData();
  }, [Requests.fetchNetflixOriginals]);
  console.log(movie);
  return (
    <div
      style={{ background: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")` }}
      className="w-full h-[448px] no-repeat bg-cover bg-center object-contain text-white mb-[20px]"
    >
      <div className="ml-[30px] pt-[130px]  h-[190px] ">
        <h1 className="text-5xl font-bold pb-4">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="text-[14px] w-[550px] pt-4 max-w-[460px]">{movie?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
