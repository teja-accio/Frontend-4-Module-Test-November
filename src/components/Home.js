// src/components/Home.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToHistory } from "../redux/actions/historyActions";
import Navbar from "./Navbar";

function Home() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      // Perform API call using searchTerm
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Dispatch addToHistory action
      dispatch(addToHistory(searchTerm));

      // Update state with the search results
      setSearchResults(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // Handle errors, e.g., show an error message to the user
      setSearchResults(null);
      setError(
        "Error fetching data. Please try again with different keywords."
      );
    }
  };

  return (
    <div>
      <Navbar />
      {/* <h1>Dictionary App</h1> */}
      <div className="input">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="home-detail">
        {/* Display search results or error */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {searchResults && (
          <div>
            <h2>{searchResults[0].word}</h2>
            {searchResults[0].phonetics && (
              <div className="">
                <p>{searchResults[0].phonetics[0].text}</p>
                <audio controls>
                  <source
                    src={searchResults[0].phonetics[0].audio}
                    type="audio/mp3"
                  />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            )}
            {searchResults[0].meanings && (
              <div>
                <h3>Meanings:</h3>
                <ul>
                  {searchResults[0].meanings.map((meaning, index) => (
                    <li key={index}>
                      <h1>{meaning.partOfSpeech}</h1>
                      {/* <p>Definitions:</p> */}
                      <ul>
                        {meaning.definitions.map((definition, subIndex) => (
                          <li key={subIndex}>
                            <p>{definition.definition}</p>
                            {/* {definition.synonyms && (
                            //   <p>Synonyms: {definition.synonyms.join(", ")}</p>
                            )} */}
                            {/* {definition.antonyms && (
                            //   <p>Antonyms: {definition.antonyms.join(", ")}</p>
                            )} */}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
