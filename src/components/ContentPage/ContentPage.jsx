import React from 'react';
import './ContentPage.module.scss'
import s from './ContentPage.module.scss'
import { ContentPageFooter } from './ContentPageFooter/ContentPageFooter'
import { ContentPageHeader } from './ContentPageHeader/ContentPageHeader'
import { ContentPageMain } from './ContentPageMain/ContentPageMain'
import { useState } from "react";
import bgCoffe from '../../img/jpg/bg_coffe.jpg'


export const ContentPage = ({ name }) => {

	const [showHeader, closeHeader] = useState(true);

	return (
		<div className={s.ContentPageContainer}>
			{showHeader ? (
				<>
					<img className={s.bg_img} src={bgCoffe} alt="" />
					<ContentPageHeader name={name} closeHeader={closeHeader} />
					<ContentPageMain />
					<ContentPageFooter />
				</>
			) : (
				<>
				<img className={s.bg_img} src={bgCoffe} alt="" />
					<ContentPageMain />
					<ContentPageFooter />
				</>
			)
			}
		</div>
	)
}
