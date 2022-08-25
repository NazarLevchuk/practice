import React from 'react'
import s from './HomeContentFeatured.module.scss'
import { FeaturedItems } from './FeaturedItems/FeaturedItems'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

export const HomeContentFeatured = () => {

	let mapStateToProps = (state) => {
		return {
			state: state
		}
	}
	let mapDispatchToProps = (dispatch) => {
		return {

			dispatch: dispatch
		}
	}

	const FeaturedItemsContainer = compose(
		connect(mapStateToProps, mapDispatchToProps))
		(FeaturedItems)
	return (
		<div className={s.HomeContentFeatured}>
			<h2 className={s.FeaturedTitle}><span>/</span>Featured</h2>
			<FeaturedItemsContainer />
			<div className={s.FeaturedButton}><NavLink to={'/products'}>all products</NavLink></div>
		</div>
	)
}




