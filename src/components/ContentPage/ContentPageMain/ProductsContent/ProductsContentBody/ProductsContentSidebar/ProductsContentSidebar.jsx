import React from 'react'
import s from './ProductsContentSidebar.module.scss'

export const ProductsContentSidebar = ({state, hendlerSearch,searchText}) => {


	return (
		<div className={s.ProductsContentSidebar}>
					<input className={s.SidebarSearchArea} onChange={hendlerSearch} value={searchText} type="text" placeholder="Search..."/>
					<div className={s.SidebarCompanyList}>company</div>
					<div className={s.SidebarPriceFilter}>price</div>
				</div>
	)
}
