import React from 'react';
import { Button } from '@mui/material';

function CustomButton({ text, onClick, endIcon }) {
  return (
    <Button variant="contained" endIcon={endIcon} onClick={onClick}>
      {text}
    </Button>
  );
}

export default CustomButton;
