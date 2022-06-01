import React from 'react'
import s from './ProductsContentSidebar.module.scss'

export const ProductsContentSidebar = ({state, hendlerSearch}) => {


console.log(state.inputSearchValue)
	return (
		<div className={s.ProductsContentSidebar}>
					<input className={s.SidebarSearchArea} onChange={hendlerSearch} value={state.inputSearchValue} type="text" placeholder="Поиск машины по модели"/>
					<div className={s.SidebarCompanyList}>company</div>
					<div className={s.SidebarPriceFilter}>price</div>
				</div>
	)
}
