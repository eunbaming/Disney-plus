import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import request from "../api/request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 여러 영화 정보를 가져오기
    const response = await axios.get(request.fetchNowPlaying);
    console.log(response);
    // 여러 영화 중 하나의 영화 ID를 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;
    // 특정 영화의 상세 정보 가져오기(비디오 정보 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  return <div>Banner</div>;
};

export default Banner;
