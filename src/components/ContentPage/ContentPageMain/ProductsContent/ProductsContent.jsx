import React from 'react'

import s from './ProductsContent.module.scss'
import { ProductsContentBody } from './ProductsContentBody/ProductsContentBody';
import { ProductsContentTitle } from './ProductsContentTitle/AboutContentTitle';

export const ProductsContent = ({ store }) => {





	
	return (
		<div className={s.ProductsContent_container}>
			<ProductsContentTitle />
			<ProductsContentBody store={store} state={store.getState()} />
		</div >
	)
}
