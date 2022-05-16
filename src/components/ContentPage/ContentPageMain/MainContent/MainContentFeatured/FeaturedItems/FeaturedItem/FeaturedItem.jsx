import React from 'react'
import s from './FeaturedItem.module.scss'


export const FeaturedItem = (props) => {
	return (
		<div className={s.FeaturedItem}>
			<div className={s.FeaturedItemImg_container}><img className={s.ItemImg} src={props.img} alt="" /></div>
			<div className={s.FeaturedItemDescription}>{props.description}</div>
			<div className={s.FeaturedItemPrise}>{props.prise}</div>
		</div>
	)
}
