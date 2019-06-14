// Shows users their form inputs for review
import React from 'react';
import PropTypes from 'prop-types';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please review your entries</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel} type="button">
        Back
      </button>
    </div>
  );
};

SurveyFormReview.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default SurveyFormReview;
