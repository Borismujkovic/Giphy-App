import React, { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";
import "./style.scss";

const API_KEY = "50WtVnEHPTRnArdAa3VEuR3qFC2b0csJ";
const SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

export const App = (props) => {
  const { title } = props;
  const [gifs, setGifs] = useState([]);


  const fetchGifs = (str) => {
    fetch(`${SEARCH_URL}?api_key=${API_KEY}&q=${str ? str : "random"}&limit=50`)
      .then((res) => res.json())
      .then((results) => setGifs(results.data));
  };

  const keydownHandler = (event) => {
    fetchGifs(event.target.value);
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  return (
        <div className="app">
          <header>{title}</header>
          <main>
            <h1>Search Giphy</h1>
            <input onKeyDown={keydownHandler}></input>
            <SearchResults data={gifs} />
          </main>
        </div>
  );
};

export default App;
