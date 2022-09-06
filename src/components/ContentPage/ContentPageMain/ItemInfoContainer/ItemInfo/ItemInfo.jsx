import React, { useState } from 'react'
import s from './ItemInfo.module.scss'
import { Reviews } from './Reviews/Reviews'
import loading from '../../../../../img/gif/Loading.gif'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

export const ItemInfo = (props) => {

	const [value, setValue] = useState('')
	const [isConfirm, setIsConfirm] = useState(false)

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

	let pagesCount = Math.ceil(props.totalCount / props.reviewLimit)
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount /  3)
	const [portionNumber, setPortionNumber] = useState(1)
	let leftPortionNumber = (portionNumber - 1) * 3 + 1
	let rightPortionNumber = portionNumber * 3

	const addFunction = () => {
		props.addItemActionCreator(props.filteredItemId)
		setIsConfirm(false)
	}

	const deleteFunction = (id, reviewId) => {
		props.deleteReviewThunkCreator(id, reviewId, portionNumber)
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
			{isConfirm ?
				<div className={s.confirmShoping}>
					<div className={s.ConfirmBody}>
						<div className={s.ButtonContainer}><button className={s.ItemsBodyButton} onClick={() => setIsConfirm(false)}></button></div>
						<h2 className={s.ConfirmTitle}>Confirm shopping?</h2>
						<div className={s.ConfirmButton} onClick={addFunction}><button>Confirm!</button></div>
					</div>

				</div> : null}
			<div className={s.ItemInfoImg} >
				<img src={props.img} alt="" />
			</div>
			<div className={s.ItemInfoDesc} >
				<div className={s.Desc} >{props.descriprion}</div>
				<div className={s.Price} >{props.price} $</div>
				<div className={s.Company} >{props.company}</div>
				<div onClick={() => setIsConfirm(true)} className={s.ItemInfoButton} >
					<button type='button'>Buy!</button>
				</div>
			</div>
			<div className={s.ItemInfoComments}>
				<div className={s.ItemInfoCommentsTitle}>Our users Reviews :
					<div className={s.paginationNumbers}>
						{portionNumber > 1 && 
							<div><button onClick={() => { setPortionNumber(portionNumber - 1) }}><HiArrowSmLeft/></button></div>}
						{pages
							.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
							.map((p, id) => {
							return <span key={id} className={props.currentPortion === p ? s.SelectedPortion : ''}
								onClick={() => { props.setCurrentPortion(p) }}>{p}</span>
							})}
						{portionCount > portionNumber &&
							<div><button onClick={() => { setPortionNumber(portionNumber + 1) }}><HiArrowSmRight/></button></div>}
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
