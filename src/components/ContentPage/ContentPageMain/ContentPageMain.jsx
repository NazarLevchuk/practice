import React from 'react'
import { HomeContent } from './HomeContent/HomeContent'
import { AboutContent } from './AboutContent/AboutContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import s from './ContentPageMain.module.scss'
import  ProductsContent  from './ProductsContent/ProductsContent';
import ItemInfoContainer from './ItemInfoContainer/ItemInfoContainer';

export const ContentPageMain = () => {


	return (
		<div className={s.ContentPageMain}>
			<Routes>
				<Route exact path='/' element={<HomeContent />} />
				<Route path='/products' element={<ProductsContent />} />
				<Route path='/about' element={<AboutContent />} />
				<Route path='/itemInfo/:userId/' element={<ItemInfoContainer />}/>
			</Routes>
		</div>
	)
}
