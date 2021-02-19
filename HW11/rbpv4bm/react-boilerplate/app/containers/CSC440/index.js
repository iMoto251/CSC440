/*
 * Page440
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import CSC440 from 'containers/CSC440/csc440';

const key = 'home';

export function Page440(){
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application Page440"
        />
      </Helmet>
      <CSC440/>
    </article>
  );
}
  

export default Page440;
