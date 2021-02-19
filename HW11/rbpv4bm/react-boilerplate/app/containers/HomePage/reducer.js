/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, CHANGE_COURSE_TITLE, CHANGE_COURSE_NAME, CREATE_COURSE } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  name: 'CSC440',
  title: 'Client-side Programming',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case CREATE_COURSE:
        draft.name = action.name.replace(/@/gi, '');
        break;
      case CHANGE_COURSE_NAME:
        draft.name = action.name.replace(/@/gi, '');
        break;
      case CHANGE_COURSE_TITLE:
        draft.title = action.title.replace(/@/gi, '');

        break;
    }
  });

export default homeReducer;
