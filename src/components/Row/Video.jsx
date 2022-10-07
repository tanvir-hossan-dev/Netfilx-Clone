import React, { useEffect, useState } from "react";
import { Instance } from "../../Instance";
import "./Video.css";

const Video = ({ title, fetchUrl, isSmall }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const { data } = await Instance.get(fetchUrl);
      setMovies(data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div>
      <h2 className="text-3xl text-white font-bold pb-4">{title}</h2>
      <div className="flex overflow-x-scroll overflow-y-hidden videos py-[20px]">
        {movies?.map((movie) => (
          <div key={movie.id} className="mx-[5px]">
            <img
              src={`${base_url}${isSmall ? movie.poster_path : movie.backdrop_path}`}
              alt=""
              className={`w-full ${isSmall ? "max-h-[250px]" : "max-h-[100px]"}    object-contain  transition
              duration-500 hover:scale-[1.2] cursor-pointer overflow-hidden`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
