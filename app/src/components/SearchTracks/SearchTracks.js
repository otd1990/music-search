import React, { useState } from "react";
import "./search-tracks.css";

function SearchTracks({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for tracks..."
        value={query}
        onChange={handleInputChange}
        className="input"
      />
      <button type="submit" className="button" disabled={!query}>
        Search
      </button>
    </form>
  );
}

export default SearchTracks;
