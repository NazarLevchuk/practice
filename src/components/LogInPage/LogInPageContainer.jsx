import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setCurrentUserDataThunkCreator, setUserDataThunkCreator } from '../../redux/loggInReducer';
import { LoginPage } from './LoginPage/LoginPage';

const LogInPageContainer = (props) => {
	return (
		<LoginPage {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		state,
	};
};

export default compose(
	connect(mapStateToProps, { setUserDataThunkCreator, setCurrentUserDataThunkCreator }))(LogInPageContainer)
