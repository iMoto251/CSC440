/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Form from './Form';
import Input from './Input';
import { changeUsername, createCourse, changeCourseName, changeCourseTitle } from './actions';
import { makeSelectUsername, makeSelectChangeCourseTitle, makeSelectChangeCourseName } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
  onCreateCourse,
  onChangeCourseName,
  onChangeCourseTitle,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (courseName && courseName.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

    const [courseName, setCourseName] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    
    function handleSubmit(){
      var classes = [];
      classes.push(courseName, courseTitle);
      console.log(classes);

    }

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
      </div>
      <Form>
        <input
                  id="courseName"
                  type="text"
                  placeholder="Course Name"
                  value={courseName}
                  onChange={e =>setCourseName(e.target.value)}
              />
        <input
                  id="courseTitle"
                  type="text"
                  placeholder="Course Title"
                  value={courseTitle}
                  onChange={e => setCourseTitle(e.target.value)}
              />
              <button onClick={handleSubmit}>Submit</button>
      </Form>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onCreateCourse: PropTypes.func,
  onChangeCourseName: PropTypes.func,
  onChangeCourseTitle: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  courseName: makeSelectChangeCourseName(),
  courseTitle: makeSelectChangeCourseTitle(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onCreateCourse: evt => dispatch(createCourse(evt.target.value)),
    onChangeCourseName: evt => dispatch(changeCourseName(evt.target.value)),
    onChangeCourseTitle: evt => dispatch(changeCourseTitle(evt.target.value)),

    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log(courseName, courseTitle);
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
