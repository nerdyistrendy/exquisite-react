import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const values = {};
  props.fields.forEach(field => {
    if (field.key) {
      values[field.key] = '';
    }
  });

  const [formFields, setFormFields] = useState(values);


  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

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
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

        {inputComponents}
          {/* 
            placeholder="hm..."
            type="text" /> */}

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
