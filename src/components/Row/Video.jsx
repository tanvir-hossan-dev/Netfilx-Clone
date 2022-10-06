import React, { useEffect, useState } from "react";
import { Instance } from "../../Instance";

const Video = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await Instance.get(fetchUrl);
      setMovies(data.results);
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Video;
