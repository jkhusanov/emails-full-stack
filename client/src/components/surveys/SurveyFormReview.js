/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please review your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel} type="button">
        Back
      </button>
    </div>
  );
};

SurveyFormReview.propTypes = {
  onCancel: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps)(SurveyFormReview);
