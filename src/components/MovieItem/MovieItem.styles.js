import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/styles';

import theme from 'theme';

export const StyledCard = styled(Card)(() => ({
  width: 230,
  marginTop: '20px',
  height: 400,
  cursor: 'pointer',
}));

export const Media = styled(CardMedia)(() => ({
  component: 'img',
  height: 300,
  transition: '1s',
  '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
}));

export const Content = styled(CardContent)(() => ({
  backgroundColor: theme.palette.secondary.main,
  textAlign: 'center',
  height: '100%',
}));

export const MovieTitle = styled(Typography)(() => ({
  fontSize: theme.typography.h8,
  color: theme.palette.common.white,
}));

export const MovieYear = styled(Typography)(() => ({
  variant: 'body2',
  color: theme.palette.secondary.light,
}));
