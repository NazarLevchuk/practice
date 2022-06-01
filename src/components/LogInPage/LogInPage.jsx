import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInPage.module.scss';
import s from './LogInPage.module.scss';


export const LogInPage = ({ setIsLoggedIn, dispatch, state }) => {

	const navigate = useNavigate();

	const nameRef = useRef();
	const loginRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate("/home");

		let userDataText = { name: nameRef.current.value, login: loginRef.current.value, password: passwordRef.current.value };
		dispatch({ type: 'USER-DATA-STORAGE', userDataText: userDataText })/* userDataStorage(userDataText) */;
		setIsLoggedIn(localStorage.getItem('login'));
	}

	const [buttonState, setButtonState] = useState(false);
	const [errorEmailBlockState, setEmailErrorBlockState] = useState(true);
	const [errorPasswordBlockState, setPasswordErrorBlockState] = useState(true);


	//--------------------------LoggIn
	const handlerBlurEmail = (e) => {
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
	const handlerChangeEmail = (e) => {
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
	const handlerBlurPass = (e) => {
		const rpas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
		if (!rpas.test(String(passwordRef.current.value))) {
			setButtonState(true);
			setPasswordErrorBlockState(false);
		} else {
			setButtonState(false);
			setEmailErrorBlockState(true);
		}
	}
	const handlerChangePass = (e) => {
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
		dispatch({ type: 'UPDATE-INPUT-TEXT', nameText: nameText, emailText: emailText, passwordText: passwordText })/* (nameText, emailText, passwordText) */
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
						<input value={state.inputNameValue} ref={nameRef} onChange={onInputChange} required placeholder='Your name'></input>
					</div>
					<div className={s.input_container}> {errorEmailBlockState ? null : ErrorBlock()}
						<input value={state.inputEmailValue} ref={loginRef} onBlur={handlerBlurEmail} onChange={onEmailBothCall} required name='email' type='text' placeholder='E-mail or Phone number...'></input>
					</div>
					<div className={s.input_container}> {errorPasswordBlockState ? null : ErrorBlock()}
						<input value={state.inputPasswordValue} ref={passwordRef} onBlur={handlerBlurPass} onChange={onPasswordBothCall} required name='password' type='password' placeholder='Password....'></input>
					</div>
					<button disabled={buttonState} type='submit'>Enter</button>
				</form>
			</div>
		</div>
	);
}