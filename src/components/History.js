// src/components/History.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function History() {
  const history = useSelector((state) => state.history);
  console.log('History:', history);

  return (
    <div>
        <Navbar/>
      <h1>Search History</h1>
      <ul>
        {history.history.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
