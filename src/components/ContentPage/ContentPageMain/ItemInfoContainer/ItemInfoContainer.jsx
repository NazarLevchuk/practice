import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { compose } from 'redux'
import { addItemActionCreator, deleteReviewThunkCreator, getItemThunkCreator, getReviewThunkCreator, postReviewThunkCreator } from '../../../../redux/productsReduser'
import { ItemInfo } from './ItemInfo/ItemInfo'

const ItemInfoContainer = (props) => {
	if (!props.sortedItem.length) {
		return (
			<Navigate to="/products" replace={true} />
		)
	}
	const [currentPortion, setCurrentPortion] = useState(1)

	useEffect(() => {
		props.getItemThunkCreator(rightId)
		props.getReviewThunkCreator(rightId, currentPortion)
	}, [currentPortion])
	const { userId } = useParams()


	let filteredItemId = userId - 1
	let rightId = props.sortedItem[userId - 1].id



	return (
		<>
			<ItemInfo {...props} setCurrentPortion={setCurrentPortion} currentPortion={currentPortion} state={props.state} id={rightId} name={props.name} filteredItemId={filteredItemId} />
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		sortedItem: (state.productsReduser.productsDataFiltered || state.productsReduser.productsData ),
		currentItem: state.productsReduser.currentItem,
		descriprion: state.productsReduser.currentItem.descriprion,
		price: state.productsReduser.currentItem.price,
		company: state.productsReduser.currentItem.company,
		review: state.productsReduser.review,
		isFetch: state.productsReduser.isFetch,
		img: state.productsReduser.currentItem.img,
		name: state.contentPageReduser.email,
		totalCount: state.productsReduser.totalReviewCount,
		reviewLimit: state.productsReduser.reviewLimit,

	}
}
export default compose(
	connect(mapStateToProps, { addItemActionCreator, getItemThunkCreator, postReviewThunkCreator, getReviewThunkCreator, deleteReviewThunkCreator }))(ItemInfoContainer)
