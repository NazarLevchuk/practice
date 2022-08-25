import React from 'react'
import { connect } from 'react-redux'
import s from './ProductsContent.module.scss'
import { ProductsContentBody } from './ProductsContentBody/ProductsContentBody';
import { ProductsContentTitle } from './ProductsContentTitle/AboutContentTitle';
import { getItemsThunkCreator } from '../../../../redux/productsReduser';
import { addItemActionCreator, itemsSortingCompanyActionCreator, itemsSortingPriceActionCreator, itemsSortingTextActionCreator, resetSortActionCreator, isFetchActionCreator } from '../../../../redux/productsReduser';
import { compose } from 'redux';

const ProductsContent = (props) => {
		
	return (
		<div className={s.ProductsContent_container}>
			<ProductsContentTitle />
			<ProductsContentBody {...props} />
		</div >
	)
}

let mapStateToProps = (state) => {
	return {
		state,
		filteredItems: state.productsReduser.productsDataFiltered,
		productsData: state.productsReduser.productsData,
		isFetch: state.productsReduser.isFetch
	}
}

export default compose(
	connect(mapStateToProps, { getItemsThunkCreator, addItemActionCreator, itemsSortingCompanyActionCreator, itemsSortingPriceActionCreator, itemsSortingTextActionCreator, resetSortActionCreator, isFetchActionCreator }))(ProductsContent)