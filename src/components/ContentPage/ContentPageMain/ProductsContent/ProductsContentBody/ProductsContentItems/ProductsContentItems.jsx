import React from 'react'

import s from './ProductsContentItems.module.scss'
export const ProductsContentItems = ({ carList }) => {


debugger
	return (
		<div className={s.ProductsContentItems}>
			
			{carList}
		</div>
	)
}
