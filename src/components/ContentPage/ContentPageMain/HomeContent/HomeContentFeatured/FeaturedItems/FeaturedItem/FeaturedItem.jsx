import React from 'react'
import s from './FeaturedItem.module.scss'


export const FeaturedItem = ({description, prise, img, style}) => {
	return (
		<div style={style} className={s.FeaturedItem}>
			<div className={s.FeaturedItemImg}><img className={s.ItemImg} src={img} alt="" /></div>
			<div className={s.FeaturedItemDescription}>{description}</div>
			<div className={s.FeaturedItemPrise}>{prise}</div>
		</div>
	)
}
