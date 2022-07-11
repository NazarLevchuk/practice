import React, { useState } from 'react'
import s from './FeaturedItems.module.scss'
import { FeaturedItem } from './FeaturedItem/FeaturedItem'
import { addItemActionCreator, setItemsDataActionCreator } from '../../../../../../redux/productsReduser'
import { NavLink } from 'react-router-dom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useEffect } from 'react'
import * as axios from 'axios'


export const FeaturedItems = ({ state, dispatch }) => {

	const [widthSize, setWidthSize] = useState()
	const [current, setCurrent] = useState(0)
	const slides = state.productsReduser.productsData
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 3 ? 0 : current + 3)
	}
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 3 : current - 3)
	}
	const addArticle = (id) => {
		dispatch(addItemActionCreator(id));
	}

	useEffect(() => {
		axios.get('https://62ca9bf51eaf3786ebade9ad.mockapi.io/api/itemsData/items')
		.then(response => {
			dispatch(setItemsDataActionCreator(	
				response.data
			))
		})
	}, [])

useEffect(() => {
	setWidthSize(window.innerWidth <= 1000)
	window.addEventListener("resize", () => {
		setWidthSize(window.innerWidth <= 1000)
	});
}, [widthSize])


	const linkBlock = () => {
		return (
			<NavLink to={'/products'} className={s.LinkBlock}></NavLink>
		)
	}
	let ItemElements = state.productsReduser.productsData.slice(current, widthSize ? current + 1 : current + 3).map((newItem, id) => 
	<div key={id} className={id === current || current + 1 ? s.slide_active : s.slide}>
			{(
				<>
				<FeaturedItem
					id={id}
					key={id}
					img={newItem.img}
					description={newItem.descriprion}
					price={newItem.price}
					addArticle={addArticle}
					linkBlock={linkBlock} />
					</>
			)}
		</div>);
	return (
		<div className={s.FeaturedItems}>
			<FaArrowAltCircleLeft className={s.leftArrow} onClick={prevSlide} />
			<FaArrowAltCircleRight className={s.rightArrow} onClick={nextSlide} />
			{ItemElements }

		</div>
	)
}
