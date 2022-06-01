import React from 'react'
import s from './HomeContentFeatured.module.scss'
import { FeaturedItems } from './FeaturedItems/FeaturedItems'
import { NavLink } from 'react-router-dom'
import  styled  from 'styled-components';

export const HomeContentFeatured = ({ store }) => {
		let width = '';
	if (store.isMobile.any()){
		width = '100vw';
	}else {
		width = 'calc(100vw - 17px)'
	}

	const HomeContentFeatured = styled.div`
  height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
	min-width: ${width};
	flex: 0 1 auto;
	align-self: center;
`;

	return (
		<HomeContentFeatured>
			<h2 className={s.FeaturedTitle}><span>/</span>Featured</h2>
			<FeaturedItems store={store} />
			<div className={s.FeaturedButton}><NavLink to={'/products'}>all products</NavLink></div>
		</HomeContentFeatured>
	)
}
