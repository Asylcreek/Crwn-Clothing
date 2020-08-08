import React from 'react';

import './form-input.styles.scss';

const FormInput = (props) => {
  return (
    <div className="group">
      <input
        type={props.text ? props.text : props.name.toLowerCase()}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-input"
      />
      {props.label ? (
        <label
          className={`form-input-label ${props.value ? 'shrink' : ''}`}
          htmlFor={props.name}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
