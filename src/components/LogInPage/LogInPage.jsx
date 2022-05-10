import React from 'react'
import './LogInPage.module.scss'
import s from './LogInPage.module.scss'

export const LogInPage = ({ onChange, setCloseLoginPage},) => {
	
	const handlerChange = (event) => {
		onChange(event.target.value)
	}

/* 	const handleSubmit = (event) => {
		event.preventDefault();
	} */

	return (
		<div className={s.LogInPageContainer}>
			<form /* onSubmit={handleSubmit} */ className={s.LogInForm}>
				<h1>Вход</h1>
				<div >
					<input required  type="text" name='InputLogin' onChange={handlerChange}/>
				</div>
				<div>
					<input required type="password" name='InputPassword' />
				</div>
				<div >
					<button onClick={() => setCloseLoginPage(false)} type='button'>Войти</button>
				</div> 
			</form>
		</div>
	)
}
