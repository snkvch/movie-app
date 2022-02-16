import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import theme from 'theme';

export const StyledAppBar = styled(AppBar)(() => ({
  display: 'flex',
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: 'space-between',
}));

export const Title = styled(Typography)(() => ({
  textTransform: 'uppercase',
}));

export const TitleWrapper = styled('div')(() => ({
  display: 'flex',
}));

export const LinksContainer = styled('div')(() => ({
  textTransform: 'uppercase',
  display: 'flex',
}));

export const LinksText = styled(Typography)(() => ({
  width: '100px',
  color: theme.palette.primary.contrastText,
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.common.black,
  },
}));
