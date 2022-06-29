import React from 'react'
import { connect } from 'react-redux'
import s from './ProductsContent.module.scss'
import { ProductsContentBody } from './ProductsContentBody/ProductsContentBody';
import { ProductsContentTitle } from './ProductsContentTitle/AboutContentTitle';

export const ProductsContent = () => {
		
	let mapStateToProps = (state) => {
		return {
			state: state,
		}
	}
	let mapStoreToProps = (dispatch) => {
		return {
			dispatch: dispatch,
		}
	}
	const ProductsContentBodyContainer = connect(mapStateToProps, mapStoreToProps)(ProductsContentBody)
	return (
		<div className={s.ProductsContent_container}>
			<ProductsContentTitle />
			<ProductsContentBodyContainer />
		</div >
	)
}
