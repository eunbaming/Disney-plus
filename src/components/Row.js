import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";
import { styled } from "styled-components";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div``;
const Wrap = styled.div``;

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
    <Container>
      <h2>{title}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // loop 기능을 사용할 것인지
        loop={true}
        // arrow 버튼 사용 유무
        navigation={true}
        // page 버튼 보이게 할 지
        pagination={{ clickable: true }}
      >
        <Content id={id}>
          {movies.map((movie) => (
            <SwiperSlide>
              <Wrap>
                <img
                  key={movie.id}
                  className="row_poster"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                  onClick={() => handleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>

      {openModal && (
        <MovieModal setOpenModal={setOpenModal} {...selectedMovie} />
      )}
    </Container>
  );
};

export default Row;
