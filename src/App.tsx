import React from 'react';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { hot } from 'react-hot-loader';
import Main from 'app/template/Main';
import { BrowserRouter } from 'react-router-dom';
import { useRedux } from 'redux/reducers';
import Login from 'app/views/Login';

const App: React.FC = () => {
  // Couldn't get the return type with the default useSelector hook, so I made my own wrapper.
  const user = useRedux(store => store.user);

  // Define some themeing.
  const { palette } = useRedux(store => store.theme);
  const theme = createMuiTheme({
    palette,
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        {user.isLoggedIn
          ? (
            <Main />
          ) : (
            <Login />
          )
        }
      </BrowserRouter>
    </ThemeProvider>
  );
}

// Hot reloading for your development pleasure ;)
export default hot(module)(App);
// (I stole this from https://medium.com/@tommedema/hot-module-reloading-with-create-react-app-v3-f2c7afe1dae8.)
