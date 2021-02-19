/*
 * Page411
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import CSC411 from 'containers/CSC411/csc411';

const key = 'home';

export function Page411(){
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application Page411"
        />
      </Helmet>
      <CSC411/>
    </article>
  );
}
  

export default Page411;
