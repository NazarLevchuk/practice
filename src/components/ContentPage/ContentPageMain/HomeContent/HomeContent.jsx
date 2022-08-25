import React from 'react'
import './HomeContent.module.scss'
import s from './HomeContent.module.scss'
import { HomeContentFeatured } from './HomeContentFeatured/HomeContentFeatured'
import { HomeContentTitle } from './HomeContentTitle/HomeContentTitle'
import bgCoffe from '../../../../img/jpg/bg_coffe.jpg'

export const HomeContent = () => {

	return (
		<div className={s.HomeContent}>
			<img className={s.bg_img} src={bgCoffe} alt="" />
			<HomeContentTitle />
			<HomeContentFeatured />
		</div>
	)
}
