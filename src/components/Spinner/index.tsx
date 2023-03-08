import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';

type Props = {
  className?: string;
  size?: number;
};

function Spinner({ className, size = 14 }: Props) {
  const classes = clsx(className);

  return (
    <CircularProgress
      className={classes}
      color="inherit"
      size={size}
    />
  );
}

export default Spinner;
