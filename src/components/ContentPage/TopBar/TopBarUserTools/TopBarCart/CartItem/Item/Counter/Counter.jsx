import React from 'react'
import s from './Counter.module.scss'

export const Counter = ({ value, onIncClick, onDecClick }) => {

	return (
		<div className={s.ItemAmountCounterContainer}>
			<div className={s.ItemAmountCounter}>
				<button className={s.ButtonInc} type='button' onClick={onIncClick}></button>
				<div className={s.AmountValue}>{value}</div>
				<button className={s.ButtonDec} type='button' onClick={onDecClick}></button>
			</div>
		</div>

	)
}
