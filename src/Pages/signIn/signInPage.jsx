import React from 'react';

import './signInPage.styles.scss';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

const SignInSignUp = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
