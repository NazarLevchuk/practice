import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setCurrentUserDataThunkCreator } from '../../redux/loggInReducer';
import { SignIn } from './SignIn/SignIn';

const SignInContainer = (props) => {
	return (
		<SignIn {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		state,
	};
};
export default compose(
	connect(mapStateToProps, { setCurrentUserDataThunkCreator }))(SignInContainer)
