import React from 'react'
import s from './ProductsContentSidebar.module.scss'

export const ProductsContentSidebar = ({ hendlerPriceChange, hendlerSearchSearch, handlerSearchCompany, searchPrice, searchText }) => {

	return (
		<div className={s.ProductsContentSidebar}>
			<input className={s.SidebarSearchArea} onChange={hendlerSearchSearch} value={searchText} type="text" placeholder="Search..." />
			<div className={s.SidebarCompanyListContainer}>	
			<div className={s.SidebarCompanyListContainerTitle}>Company</div>
				<ul className={s.SidebarCompanyList}>
					<li id='' onClick={handlerSearchCompany}>All</li>
					<li id='Ikea' onClick={handlerSearchCompany}>Ikea</li>
					<li id='Marcos' onClick={handlerSearchCompany}>Marcos</li>
					<li id='Caressa' onClick={handlerSearchCompany}>Caressa</li>
					<li id='Liddy' onClick={handlerSearchCompany}>Liddy</li>
				</ul>
			</div>
			<div className={s.SidebarPriceFilter}>
				<div className={s.SidebarPriceFilterTitle}>Price</div>
				<div className={s.SidebarPriceFilterRange}>
					<input onChange={hendlerPriceChange} name="Price" type="range" min={0} max={1000} />
					<label htmlFor="Price">Value: {searchPrice}$</label>
				</div>
			</div>
		</div>
	)
}
