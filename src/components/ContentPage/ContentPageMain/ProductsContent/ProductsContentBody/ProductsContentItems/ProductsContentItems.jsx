import React from 'react'

import s from './ProductsContentItems.module.scss'
export const ProductsContentItems = ({ ItemElements }) => {


	return (
		<div className={s.ProductsContentItems}>
			{ItemElements}
		</div>
	)
}
