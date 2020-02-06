
import React from 'react'
import Nav from 'app/template/nav';
import Layout from './Layout';

const Main: React.FC = ({ children }) => {
  return (
    <Layout>
      <Nav />
      <main>
        {children}
      </main>
    </Layout>
  )
}

export default Main;