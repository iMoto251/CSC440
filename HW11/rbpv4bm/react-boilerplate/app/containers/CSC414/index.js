/*
 * Page411
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import CSC414 from 'containers/CSC414/csc414';

const key = 'home';

export function Page414(){
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application Page411"
        />
      </Helmet>
      <CSC414/>
    </article>
  );
}
  

export default Page414;
