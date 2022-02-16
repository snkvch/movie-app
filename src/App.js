import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import Header from 'components/Header/Header';
import { HomePage } from 'pages/HomePage';
import { MovieDetails } from 'pages/MovieDetails';
import { Wishlist } from 'pages/Wishlist';

import './App.css';
import theme from 'theme';

import { PATHS } from './utils/paths';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path={PATHS.homePage} element={<HomePage />} />
        <Route path={PATHS.movieDetails} element={<MovieDetails />} />
        <Route path={PATHS.wishlist} element={<Wishlist />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
