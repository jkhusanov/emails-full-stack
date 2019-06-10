/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Contains logic to render a single label and text input
import React from 'react';
import PropTypes from 'prop-types';

const SurveyField = props => {
  const { input, label } = props;

  return (
    <div>
      <label>
        {label}
        <input {...input} />
      </label>
    </div>
  );
};

SurveyField.propTypes = {
  input: PropTypes.object.isRequired,
};

export default SurveyField;
