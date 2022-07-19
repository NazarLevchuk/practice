import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import s from './TopBarCart.module.scss';
import { ReactComponent as CartIcon } from '../../../../../img/svg/cart.svg';
import { toggleShowCartActionCreator } from '../../../../../redux/topBarReducer';
import { CartItem } from './CartItem/CartItem';
import { Form } from './Form/Form';
import {
  clearInputFormTextActionCreator,
  updateInputFormTextActionCreator,
} from '../../../../../redux/cartReduser';

export function TopBarCart({ color, dispatch }) {
  const [showCart, setShowCart] = useState(false);
  const [showConfirmForm, setShowConfirmForm] = useState(false);

  const showCartItems = () => {
    setShowCart(!showCart);
    dispatch(toggleShowCartActionCreator());
  };
  const sendForm = (e) => {
    e.preventDefault();
    setShowConfirmForm(!showConfirmForm);
    localStorage.removeItem('cart');
    showCartItems();
  };
  const showForm = () => {
    setShowConfirmForm(!showConfirmForm);
    dispatch(clearInputFormTextActionCreator());
  };

  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const onInputChange = () => {
    const name = nameRef.current.value;
    const email = addressRef.current.value;
    const password = phoneRef.current.value;
    dispatch(updateInputFormTextActionCreator(name, email, password));
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
      nameRef,
      addressRef,
      phoneRef,
    };
  };
  const mapFormStoreToProps = () => {
    return {
      onInputChange: () => onInputChange(),
      nameRef,
      addressRef,
      phoneRef,
    };
  };
  const FeaturedItemsContainer = connect(
    mapStateToProps,
    mapStoreToProps
  )(CartItem);
  const FormContainer = connect(mapStateToProps, mapFormStoreToProps)(Form);

  return (
    <div className={s.TopBarCart}>
      {showCart ? (
        <div className={s.TopBarCartItems_container}>
          <div className={s.TopBarCartItemsBody}>
            <div
              onKeyDown="c"
              tabIndex={0}
              role="button"
              onClick={showCartItems}
            >
              <button
                aria-label="Save"
                type="button"
                className={s.ItemsBodyButton}
              />
            </div>
            <div className={s.ItemsBodyList}>
              <FeaturedItemsContainer />
            </div>
          </div>
          {showConfirmForm ? (
            <FormContainer showForm={showForm} sendForm={sendForm} />
          ) : null}
          <div
            aria-hidden="true"
            onClick={showCartItems}
            className={s.Overlay}
          />
        </div>
      ) : null}
      <CartIcon onClick={showCartItems} fill={color} />
    </div>
  );
}
