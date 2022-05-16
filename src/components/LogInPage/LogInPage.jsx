import React from 'react'
import './LogInPage.module.scss'
import s from './LogInPage.module.scss'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const LogInPage = ({ onChange, setCloseLoginPage }) => {

	let navigate = useNavigate();

	const loginRef = useRef();
	const passwordRef = useRef();

	const handlerChange = (event) => {
		onChange(event.target.value)
	}

	const handleSubmit = (event) => {

		const userData = {
			login: loginRef.current.value,
			password: passwordRef.current.value,
		};

		navigate("/contentpage");


		console.log(userData);

/* 		setCloseLoginPage(true) */
		event.preventDefault();

	/* 	localStorage.setItem('isLoggedIn', true) */
	}

	return (
		<div className={s.LogInPageContainer}>
			<form onSubmit={handleSubmit} className={s.LogInForm}>
				<h1>Вход</h1>
				<div >
					<input ref={loginRef} required type="text" name='InputLogin' onChange={handlerChange} />
				</div>
				<div>
					<input ref={passwordRef} required type="password" name='InputPassword' />
				</div>
				<div >
					<button type='submit'>Войти</button>
				</div>
			</form>
		</div>
	)
}
