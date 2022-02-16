import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styles';

const SEARCHBAR_PLACEHOLDER = 'Search...';

function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder={SEARCHBAR_PLACEHOLDER} />
    </Search>
  );
}

export default SearchBar;
