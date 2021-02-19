/*
 * Page411
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import CSS346 from 'containers/CSS346/css346';

const key = 'home';

export function Page346(){
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application Page411"
        />
      </Helmet>
      <CSS346/>
    </article>
  );
}
  

export default Page346;
