import React from 'react'
import s from './ProductsContentItems.module.scss'
import loading from '../../../../../../img/gif/Loading.gif'
export const ProductsContentItems = ({ ItemElements, countInc, isFetch }) => {

	return (
		<div className={s.ProductsContentItemsContainer}>
			<div className={s.ProductsContentItems}>
				{ItemElements}
			</div>
			{isFetch ? <img className={s.isFetch} src={loading} alt=""/> : null}
			<div><button disabled={isFetch} onClick={countInc} type='button' className={s.ProductsContentButton}>Show More!</button> </div>
		</div>
	)
}
