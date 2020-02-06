import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, Color } from '@material-ui/core'
import { Menu as MenuIcon, Close as CloseIcon, Palette as PaletteIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useRedux } from 'redux/reducers';
import { toggleDrawer } from 'redux/reducers/drawer';
import { createDispatcher } from 'redux/store';
import { hot } from 'react-hot-loader';
import HoverShadowBox from 'app/styled/HoverShadowBox';
import { logout } from 'redux/reducers/user';
import { setPrimary } from 'redux/reducers/theme';

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
  const options = useRedux(state => state.theme.options);

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
              <Typography variant="h6">Navigation!</Typography>
              <Button className={navClasses.loginButton} color="inherit"
                onClick={() => dispatch(logout)}>Logout {user.username || 'hackerman'}</Button>
            </Toolbar>
          </AppBar>
        </HoverShadowBox>
      </nav>
      <aside>
        <Drawer open={open} onClose={() => dispatch(toggleDrawer)} classes={{ paper: asideClasses.drawer }}>
          <span className={asideClasses.drawerCloseButton} >
            <IconButton onClick={() => dispatch(toggleDrawer)} >
              <CloseIcon />
            </IconButton>
          </span>
          <List>
            <Divider />
            {Object.keys(options).map(k => (
              // If someone knows a better way to loop through an object's properties in TS, please let me know.
              <ListItem button onClick={() => { dispatch(setPrimary, (options as any)[k] as Color) }}>
                <ListItemIcon>
                  <PaletteIcon />
                </ListItemIcon>
                <ListItemText>
                  {`${k.substr(0, 1).toUpperCase()}${k.substr(1).replace(/([A-Z])/g, ' $1')}`}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </aside>
    </>
  );
}

export default hot(module)(Nav);
