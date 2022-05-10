import React from 'react'
import './ContentPageHeader.module.scss'
import s from './ContentPageHeader.module.scss'

export const ContentPageHeader = ({name, closeHeader}) => {
	
	return (
		<div  className={s.ContentPageHeader}>
			Hello, {name}
			<button onClick={() => closeHeader(false)}></button>
		</div>
	)
}
