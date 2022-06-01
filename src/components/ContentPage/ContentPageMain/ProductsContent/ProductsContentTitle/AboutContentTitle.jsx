import React from 'react'
import s from './ProductsContentTitle.module.scss'

export const ProductsContentTitle = () => {
	return (
		<div className={s.ProductsContentTitle}>
				<div className={s.ProductsContentTitleTextBody}>
					<div className={s.ProductsContentTitleText}>Home<span>/</span>Products</div>
				</div>
			</div>
	)
}
