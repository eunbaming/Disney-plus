import React from "react";
import styled from "styled-components";
import Row from "./../../components/Row";
import request from "../../api/request";
import Banner from "./../../components/Banner";
import Category from "./../../components/Category";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    position: absolute;
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

const MainPage = () => {
  return (
    <Container>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={request.fetchComedyMovies} />
    </Container>
  );
};

export default MainPage;
