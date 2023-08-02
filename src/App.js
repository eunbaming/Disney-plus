import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Nav from "./components/Nav";
import styled from "styled-components";

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

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
    </Container>
  );
}

export default App;
