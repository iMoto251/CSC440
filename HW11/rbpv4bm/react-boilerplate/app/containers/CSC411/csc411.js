import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Wrapper, Div1, Div2, Div3, H1, H2 } from 'containers/constants';
import Links from 'containers/links';

function csc411() {
  return (
    <Wrapper>
        <Div1>
            <H1>CSC411</H1>
            <Link to="/CSC411/Syllabus">Syllabus</Link>
            <Link to="/CSC411/Schedule">Schedule</Link>
            <Link to="/CSC411/Info">Other Info.</Link>
        </Div1>
        <Div2>
            <Outlet/>
        </Div2>
        <Div3>
            <H1>External Resources</H1>
            <Links />
        </Div3>
    </Wrapper>
  );
}

export default csc411;