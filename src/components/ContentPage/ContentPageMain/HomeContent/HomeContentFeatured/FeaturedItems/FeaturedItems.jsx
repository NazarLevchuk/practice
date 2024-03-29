import React, { useState } from 'react'
import s from './FeaturedItems.module.scss'
import { FeaturedItem } from './FeaturedItem/FeaturedItem'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const FeaturedItems = ({ state }) => {
	const [widthSize, setWidthSize] = useState()
	const [current, setCurrent] = useState(0)
	const slides = state.productsReduser.productsData
	const length = slides.length
	let navigate = useNavigate()
	const nextSlide = () => {
		setCurrent(current === length - 3 ? 0 : current + 3)
	}
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 3 : current - 3)
	}

	useEffect(() => {
		setWidthSize(window.innerWidth <= 1000)
		window.addEventListener("resize", () => {
			setWidthSize(window.innerWidth <= 1000)
		});
	}, [widthSize])

	let ItemElements = state.productsReduser.productsData.slice(current, widthSize ? current + 1 : current + 3).map((newItem, id) =>
		<div onClick={() => navigate('/products', { replace: true })} key={id} className={id === current || current + 1 ? s.slide_active : s.slide}>
			{(
					<FeaturedItem
						id={id}
						key={id}
						img={newItem.img}
						description={newItem.descriprion}
						price={newItem.price} />
			)}
		</div>);
	return (
		<div className={s.FeaturedItems}>
			<FaArrowAltCircleLeft className={s.leftArrow} onClick={prevSlide} />
			<FaArrowAltCircleRight className={s.rightArrow} onClick={nextSlide} />
			{ItemElements}
		</div>
	)
}
