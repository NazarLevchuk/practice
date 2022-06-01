import React, { useState } from 'react'
import s from './ProductsContentBody.module.scss'
import { ProductsContentSidebar } from './ProductsContentSidebar/ProductsContentSidebar';
import { ProductsContentItems } from './ProductsContentItems/ProductsContentItems';
import { FeaturedItem } from '../../HomeContent/HomeContentFeatured/FeaturedItems/FeaturedItem/FeaturedItem';

const filterItems = (searchText, listOfItems, mapedList) => {
	if(!searchText){
		return mapedList
	} else {
		return listOfItems.filter((item) => item.descriprion == 'Hi-Back Seat')
	}
}


export const ProductsContentBody = ({store, state}) => {
	
/* 	var item = state.ItemData

var marvelHeroes =  item.filter(function(desc) {
    return desc.descriprion == 'Hi-Back Seat' ;
});
console.log(marvelHeroes) */
	const StyleItem = {
		minWidth: '200px',
		maxWidth: '50%',
		padding: '0px 10px',
		margin: '0px 0px 30px 0px',
	}
	let ItemElements = store.getState().ItemData.map((newItem,id) => <FeaturedItem style={StyleItem} key={id} img={newItem.img} 
	description={newItem.descriprion} prise={newItem.prise} />);

	const [carList, setCarList] = useState(ItemElements);
	let filteredItems = ''
	const hendlerSearch = (e) => {
		let searchText = e.target.value
		filteredItems = filterItems(searchText, state.ItemData, ItemElements)
		debugger
		setCarList(filteredItems)
		store.dispatch({ type: 'UPDATE-INPUT-TEXT', searchText: searchText  })
	}

	return (
		<div className={s.ProductsContentBody}>
				<ProductsContentSidebar hendlerSearch={hendlerSearch} state={store.getState()} dispatch={store.dispatch.bind(store)}/>
				<ProductsContentItems carList={carList} store={store} />
			</div>
	)
}
