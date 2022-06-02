import React, { useState } from 'react'
import s from './ProductsContentBody.module.scss'
import { ProductsContentSidebar } from './ProductsContentSidebar/ProductsContentSidebar';
import { ProductsContentItems } from './ProductsContentItems/ProductsContentItems';
import { FeaturedItem } from '../../HomeContent/HomeContentFeatured/FeaturedItems/FeaturedItem/FeaturedItem';




export const ProductsContentBody = ({store, state}) => {
	const [searchText, setSearchText] = useState('')
	const [items, setItems] = useState(state.ItemData)

	const hendlerSearch = (e) => {
		setSearchText(e.target.value)
	}

const filteredItems = items.filter((item) => {return item.descriprion.toLowerCase().includes(searchText.toLowerCase())})


	const StyleItem = {
		minWidth: '200px',
		maxWidth: '50%',
		padding: '0px 10px',
		margin: '0px 0px 30px 0px',
	}
	let ItemElements = filteredItems.map((newItem,id) => <FeaturedItem style={StyleItem} key={id} img={newItem.img} 
	description={newItem.descriprion} prise={newItem.prise} />);

	return (
		<div className={s.ProductsContentBody}>
				<ProductsContentSidebar hendlerSearch={hendlerSearch} searchText={searchText} state={store.getState()}/>
				<ProductsContentItems ItemElements={ItemElements} store={store} />
			</div>
	)
}
