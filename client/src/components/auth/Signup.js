import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form';
import {compose}  from 'redux'
import {connect} from 'react-redux';
import * as actions from '../../actions';
import './Signup.css'
 class Signup extends Component {
     onSubmit = formProps => {
         this.props.signup(formProps, ()=>{
             this.props.history.push('/feature')
         })
     }
  render() {
     const {handleSubmit} = this.props
    return(
        <form className="signup" onSubmit={handleSubmit(this.onSubmit)}>
             <div className="email-input">
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </div>
        <div className="password-input">
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </div>
        <div className="error-message">{this.props.errorMessage}</div>
        <button className="btn">Sign up</button>
      </form>    
    )
  }
}
function mapStateToProps(state){
    return{errorMessage: state.auth.errorMessage}
}
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signup'})
)(Signup)
