import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { upDateInputTextActionCreator, userDataStorageActionCreator } from '../../redux/loggInReducer';
import './LogInPage.module.scss';
import s from './LogInPage.module.scss';


export const LogInPage = ({ setIsLoggedIn, dispatch, state }) => {

	const [buttonState, setButtonState] = useState(false);
	const [errorEmailBlockState, setEmailErrorBlockState] = useState(true);
	const [errorPasswordBlockState, setPasswordErrorBlockState] = useState(true);

	const navigate = useNavigate();
	const nameRef = useRef();
	const loginRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = (event) => {
		navigate("/");
		let userDataText = { name: nameRef.current.value, login: loginRef.current.value, password: passwordRef.current.value };
		dispatch(userDataStorageActionCreator(userDataText))
		setIsLoggedIn(localStorage.getItem('login'));
		state.loggInReducer.inputNameValue = ''
		state.loggInReducer.inputEmailValue = ''
		state.loggInReducer.inputPasswordValue = ''
		event.preventDefault();
	}

	//--------------------------LoggIn
	const handlerBlurEmail = () => {
		const rp = /^\+380\d{9}$/;
		const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (!re.test(String(loginRef.current.value).toLowerCase()) && !rp.test(String(loginRef.current.value))) {
			setButtonState(true);
			setEmailErrorBlockState(false);
		} else {
			setButtonState(false);
			setEmailErrorBlockState(true);
		}
	}
	const handlerChangeEmail = () => {
		const rp = /^\+380\d{9}$/;
		const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (!re.test(String(loginRef.current.value).toLowerCase()) && !rp.test(String(loginRef.current.value))) {
			setButtonState(true);
		} else {
			setButtonState(false);
			setEmailErrorBlockState(true);
		};
	}
	//--------------------------------

	//--------------------------Password
	const handlerBlurPass = () => {
		const rpas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
		if (!rpas.test(String(passwordRef.current.value))) {
			setButtonState(true);
			setPasswordErrorBlockState(false);
		} else {
			setButtonState(false);
			setEmailErrorBlockState(true);
		}
	}
	const handlerChangePass = () => {
		const rpas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
		if (!rpas.test(String(passwordRef.current.value))) {
			setButtonState(true);
		} else {
			setButtonState(false);
			setPasswordErrorBlockState(true);
		};
	}
	//--------------------------

	const onEmailBothCall = () => {
		handlerChangeEmail();
		onInputChange();
	}
	const onPasswordBothCall = () => {
		handlerChangePass();
		onInputChange();
	}
  
	
	const onInputChange = () => {
		let nameText = nameRef.current.value
		let emailText = loginRef.current.value
		let passwordText = passwordRef.current.value
		dispatch(upDateInputTextActionCreator(nameText, emailText, passwordText))
	}

	const ErrorBlock = (e) => {
		return (
			<div className={s.error_block}>Incorrect {e}</div>
		)
	}

	return (
		<div className={s.App}>
			<div className={s.logInForm}>
				<div className={s.logInForm_header}>LoggIn</div>
				<form onSubmit={handleSubmit} className={s.form_container}>
					<div className={s.input_container}>
						<input value={state.loggInReducer.inputNameValue} ref={nameRef} onChange={onInputChange} required placeholder='Your name'></input>
					</div>
					<div className={s.input_container}> 
						<input style={errorEmailBlockState ? {border: 'solid black'} : {border: 'solid red'}} value={state.loggInReducer.inputEmailValue} ref={loginRef} onBlur={handlerBlurEmail} onChange={onEmailBothCall} required name='email' type='text' placeholder='E-mail or Phone number...'></input>
					{errorEmailBlockState ? null : ErrorBlock()}
					</div>
					<div className={s.input_container}> 
						<input style={errorPasswordBlockState ? {border: 'solid black'} : {border: 'solid red'}} value={state.loggInReducer.inputPasswordValue} ref={passwordRef} onBlur={handlerBlurPass} onChange={onPasswordBothCall} required name='password' type='password' placeholder='Password....'></input>
					{errorPasswordBlockState ? null : ErrorBlock()}
					</div>
					<button disabled={buttonState} type='submit'>Enter</button>
				</form>
			</div>
		</div>
	);
	
}
