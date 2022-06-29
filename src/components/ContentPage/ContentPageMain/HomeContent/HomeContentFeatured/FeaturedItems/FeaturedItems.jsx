import React from 'react'
import s from './FeaturedItems.module.scss'
import { FeaturedItem } from './FeaturedItem/FeaturedItem'
import { addItemActionCreator } from '../../../../../../redux/productsReduser'
import { NavLink } from 'react-router-dom'


export const FeaturedItems = ({state, dispatch}) => {
	
	const addArticle = (id) => {
		dispatch(addItemActionCreator(id));
	}
const linkBlock = () => {
	return (
		<NavLink to={'/products'} className={s.LinkBlock}></NavLink>
	)
}
let ItemElements = state.productsReduser.productsData.slice(0, 3).map( (newItem, id) => <FeaturedItem id={id} key={id} 
img={newItem.img} description={newItem.descriprion} price={newItem.price} addArticle={addArticle} linkBlock={linkBlock}/>  );

	return (
		<div className={s.FeaturedItems}>
			{ItemElements}
		</div>
	)
}
