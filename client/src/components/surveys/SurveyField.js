/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Contains logic to render a single label and text input
import React from 'react';
import PropTypes from 'prop-types';

const SurveyField = props => {
  const { input, label, meta } = props;
  const { touched, error } = meta;

  return (
    <div>
      <label> {label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

SurveyField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default SurveyField;
