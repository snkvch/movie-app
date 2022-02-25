import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

import { getMovie } from 'redux/movies/actions';

import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styles';

const SEARCHBAR_PLACEHOLDER = 'Search...';

function SearchBar() {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getMovie(textInput));
  };
  const handlerChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <Search>
      <form onSubmit={submitHandler}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={textInput}
          placeholder={SEARCHBAR_PLACEHOLDER}
          onChange={handlerChange}
        />
      </form>
    </Search>
  );
}

export default SearchBar;
