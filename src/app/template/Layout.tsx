
import React from 'react'
import { makeStyles } from '@material-ui/core';
import Nav from 'app/template/nav';


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
    <div className={classes.root} id="app-layout">
      <Nav />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;