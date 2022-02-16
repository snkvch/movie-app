import * as React from 'react';
import { NavLink } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import SearchBar from 'components/SearchBar/SearchBar';

import {
  StyledAppBar,
  StyledToolbar,
  Title,
  TitleWrapper,
  LinksContainer,
  LinksText,
} from './Header.styles';

import { LINKS } from './HeaderLinks';

const MOVIE_APP = 'Movie App';

const renderLinks = LINKS.map((link) => (
  <Title component="span" key={link.id} onClick={link.handler}>
    <NavLink to={link.to}>
      <LinksText>{link.text}</LinksText>
    </NavLink>
  </Title>
));

function Header() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <TitleWrapper>
          <MovieIcon />
          <Title>{MOVIE_APP}</Title>
        </TitleWrapper>
        <LinksContainer>{renderLinks}</LinksContainer>
        <SearchBar />
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
