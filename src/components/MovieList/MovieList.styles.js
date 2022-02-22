import { Container, Grid } from '@mui/material';
import { styled } from '@mui/styles';

import theme from 'theme';

export const ListContainer = styled(Container)(() => ({
  maxWidth: 'lg',
}));

export const List = styled(Grid)(() => ({
  justifyContent: 'center',
}));

export const Title = styled('h2')(() => ({
  color: theme.palette.primary.contrastText,
}));
