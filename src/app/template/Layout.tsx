import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    height: `100vh`,
    overflow: 'hidden'
  }
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default Layout
