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
const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  img {
    position: absolute;
    top: 0;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

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
        breakpoints={{
          1378: {
            slidesPerView: 5, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
      >
        <Content id={id}>
          {movies.map((movie) => (
            <SwiperSlide>
              <Wrap>
                <img
                  key={movie.id}
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
