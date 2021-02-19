/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Page411 from 'containers/CSC411/Loadable';
import {CSC411Syllabus, CSC411Schedule, CSC411OtherInfo} from 'containers/CSC411/csc411info';
import Page414 from 'containers/CSC414/Loadable';
import {CSC414Syllabus, CSC414Schedule, CSC414OtherInfo} from 'containers/CSC414/csc414info';
import Page440 from 'containers/CSC440/Loadable';
import {CSC440Syllabus, CSC440Schedule, CSC440OtherInfo} from 'containers/CSC440/csc440info';
import Page346 from 'containers/CSS346/Loadable';
import {CSS346Syllabus, CSS346Schedule, CSS346OtherInfo} from 'containers/CSS346/css346info';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
//import Footer from 'componenets/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Routes>

        <Route exact path="/" element={<HomePage />} />

        <Route path="csc411" element={<Page411 />}>
          <Route path="Syllabus" element={<CSC411Syllabus/>}/>
          <Route path="Schedule" element={<CSC411Schedule/>}/>
          <Route path="Info" element={<CSC411OtherInfo/>}/>
        </Route>

        <Route path="csc414" element={<Page414 />}>
          <Route path="Syllabus" element={<CSC414Syllabus/>}/>
          <Route path="Schedule" element={<CSC414Schedule/>}/>
          <Route path="Info" element={<CSC414OtherInfo/>}/>
        </Route>

        <Route path="csc440" element={<Page440 />}>
          <Route path="Syllabus" element={<CSC440Syllabus/>}/>
          <Route path="Schedule" element={<CSC440Schedule/>}/>
          <Route path="Info" element={<CSC440OtherInfo/>}/>
        </Route>

        <Route path="css346" element={<Page346 />}>
          <Route path="Syllabus" element={<CSS346Syllabus/>}/>
          <Route path="Schedule" element={<CSS346Schedule/>}/>
          <Route path="Info" element={<CSS346OtherInfo/>}/>
        </Route>

        <Route path="/features" element={<FeaturePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </AppWrapper>
  );
}
