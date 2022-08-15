import React from "react";
import Slika from "./ResultImg";

const ResultColumn = (props) => {
  const gifovi = props.data;

  return (
    <div className="result-col">
      {gifovi.map((element) => (
        <Slika img={element} />
      ))}
    </div>
  );
};

export default ResultColumn;
