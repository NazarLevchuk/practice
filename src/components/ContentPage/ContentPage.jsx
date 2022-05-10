import React from 'react';
import './ContentPage.module.scss'
import s from './ContentPage.module.scss'
import { ContentPageFooter } from './ContentPageFooter/ContentPageFooter'
import { ContentPageHeader } from './ContentPageHeader/ContentPageHeader'
import { ContentPageMain } from './ContentPageMain/ContentPageMain'
import { useState } from "react";

export const ContentPage = ({ name }) => {
	
	const [showHeader, closeHeader] = useState(true);

	return (
		<div className={s.ContentPageContainer}>
			{showHeader ? (
				<>	
					<ContentPageHeader name={ name } closeHeader={closeHeader}/>
					<ContentPageMain />
					<ContentPageFooter />
				</>
			) : (
				<>
					<ContentPageMain />
					<ContentPageFooter />
				</>
			)


			}
		</div>
	)
}
