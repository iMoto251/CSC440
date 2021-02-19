import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <A>
      William Burkes - CSC440 Final Project
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="csc411">
          <FormattedMessage {...messages.csc411} />
        </HeaderLink>
        <HeaderLink to="csc414">
          <FormattedMessage {...messages.csc414} />
        </HeaderLink>
        <HeaderLink to="csc440">
          <FormattedMessage {...messages.csc440} />
        </HeaderLink>
        <HeaderLink to="css346">
          <FormattedMessage {...messages.css346} />
        </HeaderLink>
      </NavBar>
    </A>
  );
}

export default Header;
