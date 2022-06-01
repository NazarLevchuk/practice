import React from 'react'
import { HomeContent } from './HomeContent/HomeContent'
import { AboutContent } from './AboutContent/AboutContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import s from './ContentPageMain.module.scss'
import { ProductsContent } from './ProductsContent/ProductsContent';

export const ContentPageMain = ({ store }) => {

	return (
		<div className={s.ContentPageMain}>
			
			<Routes>
				<Route path='home' element={<HomeContent store={store} />} />
				<Route path='products' element={<ProductsContent store={store} />} />
				<Route path='about' element={<AboutContent />} />
			</Routes>
		</div>
	)
}
