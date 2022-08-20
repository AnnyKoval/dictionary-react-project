import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResuls] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResuls(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunrise, water, sea, flower...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loaded...";
  }
}
