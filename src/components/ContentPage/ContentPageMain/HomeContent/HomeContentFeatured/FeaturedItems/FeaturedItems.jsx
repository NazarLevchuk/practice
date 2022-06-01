import React from 'react'
import s from './FeaturedItems.module.scss'
import { FeaturedItem } from './FeaturedItem/FeaturedItem'

export const FeaturedItems = ({store}) => {

let ItemElements = store.getState().ItemData.slice(0, 3).map( (newItem,id) => <FeaturedItem id={id} key={id} img={newItem.img} description={newItem.descriprion} prise={newItem.prise}/>  );

	return (
		<div className={s.FeaturedItems}>
			{ItemElements}
		</div>
	)
}
