import React from 'react'
import s from './Reviews.module.scss'
import { FaTrash } from 'react-icons/fa';

export const Reviews = (props) => {

	const deleteReview = () => {
		props.deleteFunck(props.id, props.reviewId)
	}

	return (
		<div className={s.ReviewsBody}>

			<div className={s.ReviewTools}>
				<div className={s.UserName}>
					{props.userName}
				</div>
				<div onClick={deleteReview}><FaTrash style={{ height: "20px", width: "20px" }} /></div>
			</div>
			<div className={s.ReviewInfo}>
				<div className={s.UserReviews}>
					{props.userReviews}
				</div>
				<div className={s.CurrentTime}>
					{props.currentTime}
				</div>

			</div>

		</div>
	)
}

