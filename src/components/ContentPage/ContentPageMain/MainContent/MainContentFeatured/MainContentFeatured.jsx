import React from 'react'
import s from './MainContentFeatured.module.scss'
import { FeaturedItems } from './FeaturedItems/FeaturedItems'
import { NavLink } from 'react-router-dom'

export const MainContentFeatured = () => {
	return (
		<div className={s.MainContentFeatured}>
			<h2 className={s.FeaturedTitle}><span>/</span>Featured</h2>
			<FeaturedItems />
			<div className={s.FeaturedButton}><NavLink to={'/contentpage'}>all products</NavLink></div>
		</div>
	)
}
