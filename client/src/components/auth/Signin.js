import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Signin.css'
class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="signin" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="email-input">
    
          <Field
            name="email"
            placeholder="Email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </div>
        <div className="password-input">
      
          <Field
            name="password"
            placeholder="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </div>
        <div className="error-message">{this.props.errorMessage}</div>
        <button className="btn">Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
