import React from 'react'
import './MainContent.module.scss'
import s from './MainContent.module.scss'
import { MainContentFeatured } from './MainContentFeatured/MainContentFeatured'
import { MainContentTitle } from './MainContentTitle/MainContentTitle'

export const MainContent = () => {

	return (
		<div className={s.MainContent}>
			<MainContentTitle />
			<MainContentFeatured />
		</div>
	)
}
