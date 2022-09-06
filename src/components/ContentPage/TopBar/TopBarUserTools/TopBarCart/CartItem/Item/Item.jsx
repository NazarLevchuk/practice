import React from 'react';
import { connect } from 'react-redux';
import s from './Item.module.scss';
import {
  decreaseActionCreator,
  increaseActionCreator,
  removeItemActionCreator,
} from '../../../../../../../redux/cartReduser';
import { Counter } from './Counter/Counter';

export function Item({ setButtonFormState, item, id, dispatch }) {
  const mapStateToProps = () => ({
    value: JSON.parse(sessionStorage.getItem('cart'))[id].amount,
  });

  const mapDispatchToProps = (dispatch) => ({
    onIncClick: () => dispatch(increaseActionCreator(id)),
    onDecClick: () => dispatch(decreaseActionCreator(id)),
  });
  const ContainerCounter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);

  return (
    <div className={s.CartItem}>
      <div className={s.ItemImgContainer}>
        <img className={s.ItemImg} src={item.img} alt="" />
      </div>
      <div className={s.ItemTools}>
        <div className={s.ItemToolInfo}>
          <div className={s.ItemDescriprion}>{item.descriprion}</div>
          <div className={s.ItemPrice}>$ {item.price}</div>
        </div>
        <button
          type="button"
          onClick={() =>
            dispatch(removeItemActionCreator(id, setButtonFormState))
          }
          className={s.ItemToolsButton}
        >
          remove
        </button>
      </div>
      <ContainerCounter />
    </div>
  );
}
