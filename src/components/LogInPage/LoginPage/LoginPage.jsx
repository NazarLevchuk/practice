import React from 'react'
import s from './LoginPage.module.scss'
import { Formik } from 'formik';
import * as yup from 'yup'

export const LoginPage = (props) => {
	const validationsSchema = yup.object().shape({
		name: yup.string().typeError('Must be an stroke').required('Required'),
		email: yup.string().email('Incorrect email').required('Required'),
		confirmEmail: yup.string().oneOf([yup.ref('email')], 'Not coincidence').required('Required'),
		password: yup.string().typeError('Must be an stroke').required('Required'),
		confirmPassword: yup.string().oneOf([yup.ref('password')], 'Not coincidence').required('Required')
	})
	return (
		<div className={s.LoginPageBody}>
			<div className={s.LoginPageTitle}>Register / <span onClick={() => props.setHaweAnAccount(true)} className={s.RedirectOnSignIn}>Hawe an Account?</span></div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					confirmEmail: '',
					password: '',
					confirmPassword: '',
				}}
				validateOnBlur

				onSubmit={(values) => {
					localStorage.setItem('login', true)
					props.setIsLoggedIn(true)
					let name = values.name
					let email = values.email
					let password = values.password
					props.setUserDataThunkCreator(name, email, password)
					props.setCurrentUserDataThunkCreator(email, password)

				}}

				validationSchema={validationsSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<div className={s.Form}>
						<div className={s.InputContainer}>
							<div className={s.LableContainer}>
								<label htmlFor={'name'}>Name</label>
								{touched.name && errors.name && <p className={s.Error}>{errors.name}</p>}
							</div>
							<input
								type={"text"}
								name={'name'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>

						</div>
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
								<label htmlFor={'confirmEmail'}>Confirm Email</label>
								{touched.confirmEmail && errors.confirmEmail && <p className={s.Error}>{errors.confirmEmail}</p>}
							</div>
							<input
								type={"text"}
								name={'confirmEmail'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.confirmEmail}
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
						<div className={s.InputContainer}>
							<div className={s.LableContainer}>
								<label htmlFor={'confirmPassword'}>Confirm Password</label>
								{touched.confirmPassword && errors.confirmPassword && <p className={s.Error}>{errors.confirmPassword}</p>}
							</div>
							<input
								type={"password"}
								name={'confirmPassword'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.confirmPassword}
							/>
						</div>
						<div onClick={handleSubmit} className={s.FormButton}>
							<button
								disabled={!isValid && !dirty}
								
								type={'submit'}
							>Confirm</button>
						</div>
						
					</div>
				)}
			</Formik>
		</div >
	)
}
