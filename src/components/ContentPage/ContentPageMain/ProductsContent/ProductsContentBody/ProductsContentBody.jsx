import React, { useEffect, useState } from 'react'
import s from './ProductsContentBody.module.scss'
import { ProductsContentSidebar } from './ProductsContentSidebar/ProductsContentSidebar';
import { ProductsContentItems } from './ProductsContentItems/ProductsContentItems';
import { FeaturedItem } from '../../HomeContent/HomeContentFeatured/FeaturedItems/FeaturedItem/FeaturedItem';
import { addItemActionCreator, isFetchActionCreator, itemsSortingCompanyActionCreator, itemsSortingPriceActionCreator, itemsSortingTextActionCreator, resetSortActionCreator } from '../../../../../redux/productsReduser';
import * as axios from 'axios'
import { setItemsDataActionCreator } from '../../../../../redux/productsReduser'



export const ProductsContentBody = ({ state, dispatch }) => {

	const [searchValue, setSearchValue] = useState({
		searchText: '',
		searchCompany: '',
		searchPrice: '',
	})
	const [count, setCount] = useState(10)

	const countInc = () => {
		setCount(+count + 10)
	}

	useEffect(() => {
		dispatch(isFetchActionCreator(true))
		axios.get(`https://62ca9bf51eaf3786ebade9ad.mockapi.io/api/itemsData/items?page=1&limit=${count}`)
		.then(response => {
			dispatch(isFetchActionCreator(false))
			dispatch(setItemsDataActionCreator(	
				response.data
			))
		})
	}, [count])

	let actionCreatorCompany = itemsSortingCompanyActionCreator(searchValue.searchCompany)
	let actionCreatorText = itemsSortingTextActionCreator(searchValue.searchText)
	let actionCreatorPrice = itemsSortingPriceActionCreator(searchValue.searchPrice)

	let filteredItems = state.productsReduser.productsDataFiltered

	const hendlerSearchSearch = (e) => {
		setSearchValue({ ...searchValue, searchText: e.target.value })
	}
	const handlerSearchCompany = (e) => {
		setSearchValue({ ...searchValue, searchCompany: e.target.id })
	}
	const hendlerPriceChange = (e) => {
		setSearchValue({ ...searchValue, searchPrice: e.target.value })
	}


	useEffect(() => {
		if (searchValue.searchCompany) {
			dispatch(actionCreatorCompany)
		} 
	}, [searchValue.searchCompany])
	useEffect(() => {
		if (searchValue.searchText) {
			dispatch(actionCreatorText)
		}
	}, [searchValue.searchText])
	useEffect(() => {
		if (searchValue.searchPrice) {
			dispatch(actionCreatorPrice)
		}
	}, [searchValue.searchPrice])

	const StyleItem = {
		minWidth: '200px',
		padding: '0px 10px',
		margin: '0px 0px 30px 0px',
		'@media(minWidth:780px)': { // eslint-disable-line no-useless-computed-key
      width: '50%'
    }
}
const resetSort = () => {
	dispatch(resetSortActionCreator())
}
const addArticle = (id) => {
	dispatch(addItemActionCreator(id));
}
let ItemElements = (filteredItems || state.productsReduser.productsData).map((newItem, id) => <FeaturedItem 
style={StyleItem} key={id} img={newItem.img} id={id}
	description={newItem.descriprion} price={newItem.price} addArticle={addArticle} />);

return (
	<div className={s.ProductsContentBody}>
		<ProductsContentSidebar resetSort={resetSort} hendlerPriceChange={hendlerPriceChange} handlerSearchCompany={handlerSearchCompany} hendlerSearchSearch={hendlerSearchSearch} searchText={searchValue.searchText} searchPrice={searchValue.searchPrice} state={state} />
		<ProductsContentItems isFetch={state.productsReduser.isFetch} countInc={countInc} dispatch={dispatch} ItemElements={ItemElements} />
	</div>
)
}
