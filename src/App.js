import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import { HomePage } from 'pages/HomePage';
import { MovieDetails } from 'pages/MovieDetails';
import { Wishlist } from 'pages/Wishlist';

import './App.css';
import { PATHS } from './utils/paths';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={PATHS.homePage} element={<HomePage />} />
        <Route path={PATHS.movieDetails} element={<MovieDetails />} />
        <Route path={PATHS.wishlist} element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
