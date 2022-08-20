import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResuls] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResuls(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
