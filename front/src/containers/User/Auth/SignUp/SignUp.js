import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import * as actionCreators from '../../../../store/actions';
import SignUpForm from '../../../../components/User/Auth/SignUp/SignUpForm';

import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      gender: undefined,
      birthdate: '',
      introduction: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  clickSignUpHandler = async values => {
    const { onSignUp } = this.props;
    await this.setState({ ...values });
    const signUpInfo = {
      email: values.email,
      password: values.password,
      username: values.username,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
      birthdate: values.birthdate,
      introduction: values.introduction,
    };
    onSignUp(signUpInfo);
  };

  render() {
    const {
      email,
      password,
      passwordConfirm,
      username,
      firstName,
      lastName,
      phoneNumber,
      gender,
      birthdate,
      introduction,
    } = this.state;
    return (
      <div className="SignUp">
        <SignUpForm
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          username={username}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          gender={gender}
          birthdate={birthdate}
          introduction={introduction}
          clickSubmit={this.clickSignUpHandler}
        />
      </div>
    );
  }
}
SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => {
  return {
    onSignUp: signUpInfo => dispatch(actionCreators.createUser(signUpInfo)),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(withRouter(SignUp));
