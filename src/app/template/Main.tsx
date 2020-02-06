
import React from 'react'
import Nav from 'app/template/nav';
import Layout from './Layout';
import { Typography, Grid } from '@material-ui/core';

const Main: React.FC = ({ children }) => {
  return (
    <Layout>
      <Nav />
      <main>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography>My Material-UI, Redux, Hot-Reloading, React-Router-Enabled, React Scripts Powered, TypeScript React App.</Typography>
          </Grid>
        </Grid>
      </main>
    </Layout>
  )
}

export default Main;