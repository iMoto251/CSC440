/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

  const makeSelectChangeCourseName = () =>
  createSelector(
    selectHome,
    homeState => homeState.courseName,
  );

  const makeSelectChangeCourseTitle = () =>
  createSelector(
    selectHome,
    homeState => homeState.courseTitle,
  );

export { selectHome, makeSelectUsername, makeSelectChangeCourseName, makeSelectChangeCourseTitle };
