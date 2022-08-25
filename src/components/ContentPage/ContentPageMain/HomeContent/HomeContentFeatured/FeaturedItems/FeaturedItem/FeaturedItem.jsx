import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './FeaturedItem.module.scss'


export const FeaturedItem = ({ description, price, style, id }) => {
	
	return (
		<div style={style} className={s.FeaturedItem}>
			<div className={s.FeaturedItemImg}>
				<NavLink  to={'/itemInfo/' + (id + 1)} className={s.LinkBlock}>
					<img className={s.ItemImg} src="http://loremflickr.com/640/480/fashion" alt="" />
				</NavLink>
			</div>
			<div className={s.FeaturedItemDescription}>{description}</div>
			<div className={s.FeaturedItemPrice}>{price} $</div>
		</div>
	)
}
