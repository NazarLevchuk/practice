import { connect } from 'react-redux';
import React, { useState } from 'react';
import { compose } from 'redux';
import s from './App.module.scss';
import  ContentPage  from './components/ContentPage/ContentPage';
import LogInPageContainer from './components/LogInPage/LogInPageContainer';
import SignInPageContainer from './components/SignIn/SignInContainer';


const  App = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'));
	const [haweAnAccount, setHaweAnAccount] = useState(false)
	return (
		<div className={s.wrapper_App}>
			{isLoggedIn ? (
				<ContentPage {...props} setIsLoggedIn={setIsLoggedIn} store={props.store} />
			) :
				haweAnAccount ? <SignInPageContainer setIsLoggedIn={setIsLoggedIn} /> : <LogInPageContainer setHaweAnAccount={setHaweAnAccount} setIsLoggedIn={setIsLoggedIn} />
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		name: state.contentPageReduser.email,
		initialize: state.contentPageReduser.initialized,
	}
}

export default compose(
	connect(mapStateToProps))(App)

