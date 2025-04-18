import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  let [results, setresults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setresults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiurl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} onChange={handleKeywordChange}>
        <input type="search" autoFocus={true}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
