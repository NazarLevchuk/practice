import React, { useState } from 'react'
import s from './ItemInfo.module.scss'
import { Reviews } from './Reviews/Reviews'
import loading from '../../../../../img/gif/Loading.gif'

export const ItemInfo = (props) => {

	const [value, setValue] = useState('')

	const sandReview = () => {
		let mounth = new Date().getMonth()
		let day = new Date().getDate()
		let hours = new Date().getHours()
		let minutes = new Date().getMinutes()
		let date = mounth + "." + day + ' - ' + hours + ':' + minutes
		props.postReviewThunkCreator(props.id, props.name, value, date, props.currentPortion)
		setValue('')
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			sandReview()
		}
	};

	let portionCount = Math.ceil(props.totalCount / props.reviewLimit)
	let pages = [];
	for (let i = 1; i <= portionCount; i++) {
		pages.push(i)
	}
	const deleteFunction = (id, reviewId) => {
		props.deleteReviewThunkCreator(id, reviewId)
	}

	const ReviewsData = props.review.map((newReview, id) => <Reviews
		deleteFunck={deleteFunction}
		key={id}
		id={props.id}
		reviewId={props.review[id].id}
		userName={newReview.userName}
		userReviews={newReview.userReviews}
		currentTime={newReview.currentTime} />
	)

	return (<>
		<div className={s.ItemInfoContainer}>
			<div className={s.ItemInfoImg} >
				<img src={props.img} alt="" />
			</div>
			<div className={s.ItemInfoDesc} >
				<div className={s.Desc} >{props.descriprion}</div>
				<div className={s.Price} >{props.price} $</div>
				<div className={s.Company} >{props.company}</div>
				<div onClick={() => props.addItemActionCreator(props.filteredItemId)} className={s.ItemInfoButton} >
					<button type='button'>Buy!</button>
				</div>
			</div>
			<div className={s.ItemInfoComments}>
				<div className={s.ItemInfoCommentsTitle}>Our users Reviews :
					<div className={s.paginationNumbers}>
						{pages.map((p,id) => {
							return <span key={id} className={props.currentPortion === p ? s.SelectedPortion : ''}
								onClick={() => { props.setCurrentPortion(p) }}>{p}</span>
						})}
					</div>
				</div>
				{props.isFetch ? <div className={s.Fetch}><img className={s.isFetch} src={loading} alt="" /></div> :
					ReviewsData
				}
				<div className={s.InputContainer}>
					<input onKeyDown={handleKeyDown} onChange={(e) => setValue(e.target.value)} value={value} type="text" />
					<button onClick={sandReview} type='button'>Add Review</button>
				</div>
			</div>
		</div>
	</>
	)
}
