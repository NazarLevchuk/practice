import React, { useEffect, useRef, useState } from 'react'
import s from './ProductsContentBody.module.scss'
import { ProductsContentSidebar } from './ProductsContentSidebar/ProductsContentSidebar';
import { ProductsContentItems } from './ProductsContentItems/ProductsContentItems';
import { FeaturedItem } from '../../HomeContent/HomeContentFeatured/FeaturedItems/FeaturedItem/FeaturedItem';

export const ProductsContentBody = (props) => {

	const [searchText, setSearchText] = useState('')
	const [searchPrice, setSearchPrice] = useState('')
	const [count, setCount] = useState(10)

	const SearchFucktionText = (Text) => {
		props.itemsSortingTextActionCreator(Text)
	}
	const SearchFucktionCompany = (Text) => {
		props.itemsSortingCompanyActionCreator(Text)
	}
	const SearchFucktionPrice = (Text) => {
		props.itemsSortingPriceActionCreator(Text)
	}

	useEffect(() => {
		props.getItemsThunkCreator(count)
	}, [count])
	
	const countInc = () => {
		setCount(count + 10)
	}

	const hendlerSearchSearch = (e) => {
		setSearchText(e.target.value)
		SearchFucktionText(e.target.value)
	}
	const handlerSearchCompany = (e) => {
		SearchFucktionCompany(e.target.id)
	}
	const hendlerPriceChange = (e) => {
		setSearchPrice(e.target.value)
		SearchFucktionPrice(e.target.value)
	}

	const StyleItem = {
		minWidth: '200px',
		padding: '0px 10px',
		margin: '0px 0px 30px 0px',
		'@media(minWidth:780px)': {
			width: '50%'
		}
	}
	
	const resetSort = () => {
		props.resetSortActionCreator()
	}

	let ItemElements = (props.filteredItems || props.productsData).map((newItem, id) => <FeaturedItem
		style={StyleItem} key={id} img={newItem.img} id={id}
		description={newItem.descriprion} price={newItem.price} />);

	return (
		<div className={s.ProductsContentBody}>
			<ProductsContentSidebar resetSort={resetSort} hendlerPriceChange={hendlerPriceChange} handlerSearchCompany={handlerSearchCompany} hendlerSearchSearch={hendlerSearchSearch} searchText={searchText} searchPrice={searchPrice} state={props.state} />
			<ProductsContentItems isFetch={props.isFetch} countInc={countInc} ItemElements={ItemElements} />
		</div>
	)
}
