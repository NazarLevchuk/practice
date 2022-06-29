import React from 'react'
import s from './Item.module.scss'
import { connect } from 'react-redux'
import { decreaseActionCreator, increaseActionCreator, removeItemActionCreator } from '../../../../../../../redux/cartReduser'
import { Counter } from './Counter/Counter';

export const Item = ({dispatch, item, id}) => {

const mapStateToProps=(state)=>({
	value :state.cartReduser.value
})

const mapDispatchToProps=(dispatch)=>({
	onIncClick:()=>dispatch(increaseActionCreator()),
	onDecClick:()=>dispatch(decreaseActionCreator())
})
const ContainerCounter = connect(mapStateToProps,mapDispatchToProps)(Counter);


	return (
		<div className={s.CartItem}>
			<div className={s.ItemImgContainer}><img className={s.ItemImg} src={item.img} alt="" /></div>
			<div className={s.ItemTools}>
				<div className={s.ItemToolInfo}>
					<div className={s.ItemDescriprion}>{item.descriprion}</div>
					<div className={s.ItemPrice}>$ {item.price}</div>
				</div>
				<button onClick={() => dispatch(removeItemActionCreator(id))} className={s.ItemToolsButton}>remove</button>
			</div>
			<ContainerCounter />
		</div>
	)
}
