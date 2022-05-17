import React from 'react'
import s from './FeaturedItems.module.scss'
import ItemImg from "../../../../../../img/jpg/Items_img/sofa1.jpg"
import { FeaturedItem } from './FeaturedItem/FeaturedItem'

export const FeaturedItems = ({state}) => {

let ItemElements = state.ItemData.map( (newItem) => <FeaturedItem img={ItemImg} description={newItem.descriprion} prise={newItem.prise}/>  );

	return (
		<div className={s.FeaturedItems}>
			{ItemElements}
		</div>
	)
}
