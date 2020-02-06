import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Drawer, List, Divider } from '@material-ui/core'
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useRedux } from 'redux/reducers';
import { toggleDrawer } from 'redux/reducers/drawer';
import { createDispatcher } from 'redux/store';
import { hot } from 'react-hot-loader';
import HoverShadowBox from 'app/styled/HoverShadowBox';

const useAsideStyles = makeStyles(theme => ({
  drawerCloseButton: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(3)
  },
  drawer: {
    background: theme.palette.primary.dark
  }
}));

const useNavStyles = makeStyles(theme => ({
  root: {
  },
  appBar: {
    background: theme.palette.primary.main,
    transition: 'background 0.3s',
    boxShadow: 'none',
    '&:hover': {
      background: theme.palette.primary.light,
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  loginButton: {
    marginLeft: 'auto',
  },
}));

const Nav: React.FC = () => {
  // Styles
  const navClasses = useNavStyles();
  const asideClasses = useAsideStyles();

  // Data
  const user = useRedux(state => state.user);
  const open = useRedux(state => state.drawer.open);

  // Redux change dispatcher
  const dispatch = createDispatcher(useDispatch());

  // Mount events
  return (
    <>
      <nav className={navClasses.root}>
        <HoverShadowBox>
          <AppBar position="static" className={navClasses.appBar} color="primary">
            <Toolbar>
              <IconButton className={navClasses.menuButton} color="inherit" onClick={() => dispatch(toggleDrawer)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">My Material-UI, Redux, Hot-Reloading, React-Router-Enabled, React Scripts Powered, TypeScript React App</Typography>
              <Button className={navClasses.loginButton} color="inherit">{user.username || 'Sign In'}</Button>
            </Toolbar>
          </AppBar>
        </HoverShadowBox>
      </nav>
      <aside>
        <Drawer open={open} onClose={() => dispatch(toggleDrawer)} classes={{ paper: asideClasses.drawer }}>
          <IconButton className={asideClasses.drawerCloseButton} onClick={() => dispatch(toggleDrawer)} >
            <CloseIcon />
          </IconButton>
          <List>
            <Divider />
          </List>
        </Drawer>
      </aside>
    </>
  );
}

export default hot(module)(Nav);