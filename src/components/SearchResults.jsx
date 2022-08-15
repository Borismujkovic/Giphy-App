import React from "react";
import ResultColumn from "./ResultColumn";

const SearchResults = (props) => {
  const slike = props.data;
  const colNum = 4;

  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((e) => e % 4 === 0);

  return (
    <div className="search-results">
      <ResultColumn data={slike.filter((e, i) => i % colNum === 0)} />
      <ResultColumn data={slike.filter((e, i) => i % colNum === 1)} />
      <ResultColumn data={slike.filter((e, i) => i % colNum === 2)} />
      <ResultColumn data={slike.filter((e, i) => i % colNum === 3)} />
    </div>
  );
};

export default SearchResults;
