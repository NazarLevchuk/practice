import React from 'react'
import s from './Form.module.scss'
import { Formik } from 'formik';
import * as yup from 'yup'

export const Form = (props) => {
	const validationsSchema = yup.object().shape({
		name: yup.string().typeError('Must be an stroke').required('Required'),
		email: yup.string().email('Incorrect email').required('Required'),
		address: yup.string().typeError('Must be an stroke').required('Required'),
	})
	return (
		<div className={s.LoginPageBody}>
			<Formik
				initialValues={{
					name: '',
					email: '',
					address: '',
				}}
				validateOnBlur
				onSubmit={(values) => {
					localStorage.removeItem('cart', true)
					props.showForm()
					props.SuccsessSet()
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
								<label htmlFor={'address'}>Address</label>
								{touched.address && errors.address && <p className={s.Error}>{errors.address}</p>}
							</div>
							<input
								type={"text"}
								name={'address'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.address}
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
			<div className={s.Overlay} onClick={props.showForm}></div>
		</div >
	)
}

