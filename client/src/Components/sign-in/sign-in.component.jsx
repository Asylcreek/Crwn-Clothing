import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { emailSignInStart } = this.props;

    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
