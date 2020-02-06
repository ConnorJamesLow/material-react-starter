import React, { useState } from 'react'
import { makeStyles, Typography, FormControl, Grid, TextField, Button } from '@material-ui/core'
import Layout from 'app/template/Layout';
import HoverShadowBox from 'app/styled/HoverShadowBox';
import { createDispatcher } from 'redux/store';
import { useDispatch } from 'react-redux';
import { login } from 'redux/reducers/user';

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formRoot: {
    minWidth: 640,
    padding: theme.spacing(4),
    background: theme.palette.primary.main,
    transition: 'background 0.3s',
    boxShadow: 'none',
    '&:hover': {
      background: theme.palette.primary.light,
    }
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = createDispatcher(useDispatch());
  return (
    <Layout>
      <div className={classes.root}>
        <HoverShadowBox>
          <div className={classes.formRoot}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4">Please Sign In</Typography>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <TextField value={username} label="Username" variant="outlined"
                    onChange={({ target: { value } }) => setUsername(value)} />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <TextField value={password} label="Password" variant="outlined"
                    onChange={({ target: { value } }) => setPassword(value)} />
                </FormControl>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" disableElevation
                  onClick={() => dispatch(login, { username, password })}>
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </div>
        </HoverShadowBox>
      </div>
    </Layout>
  )
}

export default Login
