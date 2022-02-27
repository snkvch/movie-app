import { styled } from '@mui/styles';
import theme from 'theme';

export const MovieSection = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  color: theme.palette.common.white,
  fontWeight: 400,
  padding: '40px 0px',
}));

export const SectionLeft = styled('div')(() => ({}));

export const SectionRight = styled('div')(() => ({
  margin: '30px 30px',
  display: 'flex',
  flexDirection: 'column',
}));

export const MovieTitle = styled('h1')(() => ({
  color: theme.palette.common.white,
}));

export const MovieRating = styled('div')(() => ({
  marginTop: '30px',
  color: theme.palette.secondary.light,
  '& span': { padding: 5 },
}));

export const MoviePlot = styled('div')(() => ({
  marginTop: '30px',
  lineHeight: '1.8rem',
  width: '600px',
}));

export const MovieInfo = styled('div')(() => ({
  marginTop: '30px',
  '& div span:first-child': {
    padding: '10px 0',
    fontWeight: 600,
    width: '100px',
    display: 'inline-block',
    color: theme.palette.secondary.light,
  },
}));

export const MoviePoster = styled('div')(() => ({}));
