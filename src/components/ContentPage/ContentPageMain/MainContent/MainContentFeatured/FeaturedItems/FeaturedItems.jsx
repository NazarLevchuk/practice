import React from 'react'
import s from './FeaturedItems.module.scss'
import ItemImg from "../../../../../../img/jpg/Items_img/sofa1.jpg"
import { FeaturedItem } from './FeaturedItem/FeaturedItem'

export const FeaturedItems = () => {

	let ItemData = [
		{descriprion:'Hi-Back Seat', prise:'20$',},
		{descriprion:'Hi-Back Sofa', prise:'30$',},
		{descriprion:'Hi-Back Chair', prise:'10$',},
	]
	
let ItemElements = ItemData.map( (newItem) => <FeaturedItem img={ItemImg} description={newItem.descriprion} prise={newItem.prise}/>  );

	return (
		<div className={s.FeaturedItems}>
			{ItemElements}
		</div>
	)
}
