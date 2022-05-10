import React from 'react'
import './ContentPageMain.module.scss'
import { MainContent } from './MainContent/MainContent'
import { MainTopBar } from './MainTopBar/MainTopBar'
import s from './ContentPageMain.module.scss'
export const ContentPageMain = ({setCloseLoginPage}) => {
	return (
		<div className={s.ContentPageMain}>
			<MainTopBar />
			<MainContent setCloseLoginPage={setCloseLoginPage}/>
		</div>
	)
}
