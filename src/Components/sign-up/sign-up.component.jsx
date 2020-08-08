import React from 'react';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
    };
  }

  render() {
    return <div>SignUp</div>;
  }
}

export default SignUp;
