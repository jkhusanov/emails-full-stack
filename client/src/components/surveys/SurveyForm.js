// Shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

import formFields from './formFields';

class SurveyForm extends Component {
  renderFields = () => {
    return _.map(formFields, field => {
      return (
        <Field
          key={field.name}
          type={field.type}
          name={field.name}
          label={field.label}
          component={SurveyField}
        />
      );
    });
  };

  render() {
    const { handleSubmit, onSurveySubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value for ${name}`;
    }
  });

  return errors;
}

SurveyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSurveySubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
