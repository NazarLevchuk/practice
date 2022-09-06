import React from 'react'
import s from './SignIn.module.scss'
import { Formik } from 'formik';
import * as yup from 'yup'

export const SignIn = (props) => {
	const validationsSchema = yup.object().shape({
		email: yup.string().email('Incorrect email').required('Required'),
		password: yup.string().typeError('Must be an stroke').required('Required'),
	})

	return (
		<div className={s.LoginPageBody}>
			<div className={s.LoginPageTitle}><span onClick={() => props.setHaweAnAccount(false)} className={s.RedirectOnSignIn}>To registration</span> / SignIn</div>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validateOnBlur
				onSubmit={(values) => {
					let email = values.email
					let password = values.password
					props.setCurrentUserDataThunkCreator(email, password)
					sessionStorage.setItem('login', true)
					props.setIsLoggedIn(true)
				}}
			validationSchema={validationsSchema}
			>
			{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
				<div className={s.Form}>
					<div className={s.InputContainer}>
						<div className={s.LableContainer}>
							<label htmlFor={'email'}>Email</label>
							{touched.email && errors.email && <p className={s.Error}>{errors.email}</p>}
						</div>
						<input
							type={"text"}
							name={'email'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
					</div>
					<div className={s.InputContainer}>
						<div className={s.LableContainer}>
							<label htmlFor={'password'}>Password</label>
							{touched.password && errors.password && <p className={s.Error}>{errors.password}</p>}
						</div>
						<input
							type={"password"}
							name={'password'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
					</div>
						<div onClick={handleSubmit} className={s.FormButton}>
							<button
							
							disabled={!isValid && !dirty}
							type={'submit'}
						>Confirm</button>
					</div>
				</div>)}
		</Formik>
		</div >
	)
}
