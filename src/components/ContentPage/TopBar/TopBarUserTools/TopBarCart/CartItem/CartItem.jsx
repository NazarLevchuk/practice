import React, { useState, useEffect } from 'react';

import s from './CartItem.module.scss';
import { Item } from './Item/Item';

export function CartItem({ dispatch, showForm }) {
  const [buttonFormState, setButtonFormState] = useState(true);

  const cartList = JSON.parse(sessionStorage.getItem('cart')) || [];

  const result = cartList.reduce((sum, current) => {
    return +sum + +current.price * current.amount;
  }, 0);

  useEffect(() => {
		if ((JSON.parse(sessionStorage.getItem('cart')) || []).length !== 0) {
      setButtonFormState(false);
    } else {
      setButtonFormState(true);
    }
  });

  const items = cartList.map((item, id) => (
    <Item
      setButtonFormState={setButtonFormState}
      key={id}
      dispatch={dispatch}
      item={item}
      id={id}
    />
  ));

  return (
    <div className={s.CartItems}>
      <div className={s.CartTitle}>Your Bag</div>
      <div className={s.CartList}>
        {items}
        <div className={s.CartBottomBar}>
          <div className={s.TotalSumm}>Total: ${result}</div>
          <button
            disabled={buttonFormState}
            type="button"
            onClick={showForm}
            className={s.ConfirmBtn}
          >
            Confirm !
          </button>
        </div>
      </div>
      <div />
    </div>
  );
}
