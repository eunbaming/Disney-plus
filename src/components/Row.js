import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const fetchMoviData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log("res", response);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMoviData();
  }, [fetchMoviData]);

  const handleClick = (movie) => {
    setOpenModal(true);
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider_arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row_poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className="slider_arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>

      {openModal && (
        <MovieModal setOpenModal={setOpenModal} {...selectedMovie} />
      )}
    </div>
  );
};

export default Row;
