import React from 'react';

import './button.styles.scss';

const Button = (props) => {
  return (
    <button
      className={`${props.isGoogleSignIn ? 'google-sign-in' : ''} ${
        props.inverted ? 'inverted' : ''
      } custom-button`}
      type={props.type}
      value={props.value}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
