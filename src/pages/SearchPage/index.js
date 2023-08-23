import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log("response", response);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  if (searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageURL =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  className="movie_column-poster"
                  onClick={() => navigate(`/${movie.id}`)}
                >
                  <img
                    className="movie_poster"
                    src={movieImageURL}
                    alt="movie"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className="no-results">
        <div className="no-results_text">
          <p>찾고자 하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
