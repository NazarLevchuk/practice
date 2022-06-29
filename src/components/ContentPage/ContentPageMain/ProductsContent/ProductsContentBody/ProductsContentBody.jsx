import React, { useEffect, useState } from 'react'
import s from './ProductsContentBody.module.scss'
import { ProductsContentSidebar } from './ProductsContentSidebar/ProductsContentSidebar';
import { ProductsContentItems } from './ProductsContentItems/ProductsContentItems';
import { FeaturedItem } from '../../HomeContent/HomeContentFeatured/FeaturedItems/FeaturedItem/FeaturedItem';
import { addItemActionCreator, itemsSortingCompanyActionCreator, itemsSortingPriceActionCreator, itemsSortingTextActionCreator } from '../../../../../redux/productsReduser';





export const ProductsContentBody = ({state, dispatch}) => {

	const [searchValue, setSearchValue] = useState({
		searchText: '',
		searchCompany: '',
		searchPrice: '',
	})
	let actionCreatorCompany = itemsSortingCompanyActionCreator(searchValue.searchCompany)
	let actionCreatorText = itemsSortingTextActionCreator(searchValue.searchText)
	let actionCreatorPrice = itemsSortingPriceActionCreator(searchValue.searchPrice)
	
	let	filteredItems = state.productsReduser.productsDataFiltered

	const hendlerSearchSearch = (e) => {
		setSearchValue({...searchValue, searchText: e.target.value})
	}
	const handlerSearchCompany = (e) => {
		setSearchValue({...searchValue, searchCompany: e.target.id})
	}
	const hendlerPriceChange = (e) => {
		setSearchValue({...searchValue, searchPrice: e.target.value})
	}

	useEffect(()=>{

			dispatch(actionCreatorCompany) //Сортировка при рендері для пуша в FilteredItems(пуш в localstorage)
			
	},[searchValue.searchCompany])
	useEffect(()=>{
		if(searchValue.searchText) {
			dispatch(actionCreatorText) }
	},[searchValue.searchText])
	useEffect(()=>{
		if(searchValue.searchPrice) {
			dispatch(actionCreatorPrice)   }
	},[searchValue.searchPrice])

	const StyleItem = {
		minWidth: '200px',
		maxWidth: '50%',
		padding: '0px 10px',
		margin: '0px 0px 30px 0px',
	}

	const addArticle = (id) => {
		dispatch(addItemActionCreator(id));
	}

	let ItemElements = (filteredItems || state.productsReduser.productsData).map((newItem,id) => <FeaturedItem style={StyleItem} key={id} img={newItem.img} id={id}
	description={newItem.descriprion} price={newItem.price} addArticle={addArticle}/>);


	return (
		<div className={s.ProductsContentBody}>
				<ProductsContentSidebar hendlerPriceChange={hendlerPriceChange} handlerSearchCompany={handlerSearchCompany} hendlerSearchSearch={hendlerSearchSearch} searchText={searchValue.searchText} searchPrice={searchValue.searchPrice} state={state} />
				<ProductsContentItems ItemElements={ItemElements} />
			</div>
	)
}
