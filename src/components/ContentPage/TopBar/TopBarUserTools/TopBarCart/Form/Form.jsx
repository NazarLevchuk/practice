import React from 'react'
import s from './Form.module.scss'

export const Form = ({ sendForm, showForm, state, onInputChange, nameRef, addressRef, phoneRef }) => {
	return (
		<div className={s.FormContainer}>
			<form onSubmit={sendForm} className={s.FormBody} action="">
			<div onClick={showForm} className={s.ButtonContainer}><button type='button' className={s.FormBodyButton}></button></div>
				<div className={s.InputBody}>
					<label htmlFor ="username">Your Name</label>
					<input required ref={nameRef} onChange={onInputChange} value={state.cartReduser.order.name} type="text" id="username"  />
				</div>
				<div className={s.InputBody}>
					<label htmlFor ="address">Address</label>
					<input required ref={addressRef} onChange={onInputChange} value={state.cartReduser.order.address} type="text" id="address" />
				</div>
				<div className={s.InputBody}>
					<label htmlFor ="phone">Your phone number</label>
					<input required ref={phoneRef} onChange={onInputChange} value={state.cartReduser.order.phone} type="text" id="phone" />
				</div>
				<div className={s.SendButton}>
					<button type='submitt'>Send!</button>
				</div>
			</form>
			<div className={s.Overlay}></div>
		</div>
	)
}
