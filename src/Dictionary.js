import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultkeyword);
  let [results, setresults] = useState(null);
  let [loaded, setloaded] = useState(false);
  let [photos, setphotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setresults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setphotos(response.data.photos);
  }

  function search() {
    let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiurl).then(handleResponse);
    let pexelapikey =
      "HvPli8GySxCxNFpi0lJ4ZCbXLmeylR7d2FT18ObrFuFYsZ5K0AcIcR08";
    let pexelapiurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelapiurl, {
        headers: {
          Authorization: `${pexelapikey}`,
        },
      })
      .then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

    let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiurl).then(handleResponse);
  }

  function load() {
    setloaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultkeyword}
              autoFocus={true}
            ></input>
          </form>
          <Results results={results} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
