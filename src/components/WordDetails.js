// src/components/WordDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function WordDetails() {
  const { word } = useParams();
  const [wordDetails, setWordDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        // Perform API call to get word details
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Update state with fetched data
        setWordDetails(data[0]);
      } catch (error) {
        console.error('Error fetching word details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWordDetails();
  }, [word]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!wordDetails) {
    return <div>Error fetching word details. Please try again.</div>;
  }

  return (
    <div className='home-detail'>
        {/* <h1>Home Page</h1> */}
      <Link to="/"><h2>Navigate Back to Home</h2></Link>
      <h1>{wordDetails.word}</h1>
      {wordDetails.phonetics && (
        <div className="">
          <p>{wordDetails.phonetics[0]?.text}</p>
          <audio controls>
            <source src={wordDetails.phonetics[0]?.audio} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      )}
      {wordDetails.meanings && (
        <div>
          <h3>Meanings:</h3>
          <ul>
            {wordDetails.meanings.map((meaning, index) => (
              <li key={index}>
                <h1>{meaning.partOfSpeech}</h1>
                <ul>
                  {meaning.definitions.map((definition, subIndex) => (
                    <li key={subIndex}>
                      <p>{definition.definition}</p>
                      {/* {definition.synonyms && (
                          <p>Synonyms: {definition.synonyms.join(", ")}</p>
                        )} */}
                      {/* {definition.antonyms && (
                          <p>Antonyms: {definition.antonyms.join(", ")}</p>
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
  );
}

export default WordDetails;
