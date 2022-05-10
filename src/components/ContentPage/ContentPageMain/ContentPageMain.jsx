import React from 'react'
import './ContentPageMain.module.scss'
import { MainContent } from './MainContent/MainContent'
import { MainSidebar } from './MainSidebar/MainSidebar'
import s from './ContentPageMain.module.scss'
export const ContentPageMain = () => {
	return (
		<div className={s.ContentPageMain}>
			<MainSidebar />
			<MainContent />
		</div>
	)
}
