import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const emptyValues = {};
  props.fields.forEach(field => {
    if (field.key) {
      emptyValues[field.key] = '';
    }
  });

  const [formFields, setFormFields] = useState(emptyValues);

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const poem = props.fields.map((field) => {
      if (field.key) {
        return formFields[field.key];
      } else {
        return field;
      }
    });
    props.addPoemCallback(poem.join(' '));
    setFormFields(emptyValues);
  };

  const inputComponents = props.fields.map((field, i) => {
    if (field.key) {
      return <input key={i}
        placeholder={field.placeholder}
        type="text"
        value={formFields[field.key]}
        name={field.key}
        onChange={onInputChange}
      />;
    } else {
      return field;
    }
  });

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {inputComponents}
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
