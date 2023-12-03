// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';
import './style.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/word/:word" element={<WordDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
