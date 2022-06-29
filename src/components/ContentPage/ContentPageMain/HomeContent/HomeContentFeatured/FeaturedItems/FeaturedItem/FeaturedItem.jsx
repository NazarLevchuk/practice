import React from 'react'
import s from './FeaturedItem.module.scss'


export const FeaturedItem = ({description, price, img, style, addArticle, id, linkBlock}) => {
	
	return (
		<div  style={style} className={s.FeaturedItem}>
			<div  className={s.FeaturedItemImg}>
				{linkBlock ? linkBlock() : null}
				<img onClick={() => addArticle(id)} className={s.ItemImg} src={img} alt="" />
			</div>
			<div  className={s.FeaturedItemDescription}>{description}</div>
			<div className={s.FeaturedItemPrice}>{price} $</div>
		</div>
	)
}
