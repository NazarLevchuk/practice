import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './TopBarCart.module.scss';
import { ReactComponent as CartIcon } from '../../../../../img/svg/cart.svg';
import { toggleShowCartActionCreator } from '../../../../../redux/topBarReducer';
import { CartItem } from './CartItem/CartItem';
import { Form } from './Form/Form';
import {clearInputFormTextActionCreator} from '../../../../../redux/cartReduser';

export function TopBarCart({ color, dispatch }) {
  const [showCart, setShowCart] = useState(false);
	const [showConfirmForm, setShowConfirmForm] = useState(false);
	const [success, setSuccess] = useState(false);
	
	const SuccsessSet = () => {
		setSuccess(true)
		setTimeout(() => {
			setSuccess(false)
		}, 4000)
	}
  const showCartItems = () => {
    setShowCart(!showCart);
    dispatch(toggleShowCartActionCreator());
  };

  const showForm = () => {
    setShowConfirmForm(!showConfirmForm);
    dispatch(clearInputFormTextActionCreator());
  };

  const mapStateToProps = (state) => {
    return {
      state,
    };
  };
  const mapStoreToProps = (dispatch) => {
    return {
      onInputChange: () => onInputChange(),
      showForm: () => showForm(),
      dispatch,
    };
  };

  const FeaturedItemsContainer = connect(
    mapStateToProps,
    mapStoreToProps
	)(CartItem);
	
  const FormContainer = connect(mapStateToProps)(Form);

  return (
		<div className={s.TopBarCart}>
			{success ? <div className={s.Succsess}> Succsess!</div> : null}

      {showCart ? (
				<div className={s.TopBarCartItems_container}>
					{showConfirmForm ? (
						<FormContainer showForm={showForm} SuccsessSet={SuccsessSet} />
					) : null}
          <div className={s.TopBarCartItemsBody}>
            <div
              onClick={showCartItems}
            >
              <button
                type="button"
                className={s.ItemsBodyButton}
              />
            </div>
            <div className={s.ItemsBodyList}>
              <FeaturedItemsContainer />
            </div>
          </div>

          <div
            onClick={showCartItems}
            className={s.Overlay}
          />
        </div>
      ) : null}
      <CartIcon onClick={showCartItems} fill={color} />
    </div>
  );
}
