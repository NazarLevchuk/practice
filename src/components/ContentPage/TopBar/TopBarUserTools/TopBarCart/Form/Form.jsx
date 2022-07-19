import React from 'react';
import s from './Form.module.scss';

export function Form({
  sendForm,
  showForm,
  state,
  onInputChange,
  nameRef,
  addressRef,
  phoneRef,
}) {
  return (
    <div className={s.FormContainer}>
      <form onSubmit={sendForm} className={s.FormBody} action="">
        <div
          onClick={showForm}
          className={s.ButtonContainer}
          aria-hidden="true"
        >
          <button
            type="button"
            aria-label="Save"
            className={s.FormBodyButton}
          />
        </div>
        <div className={s.InputBody}>
          <label htmlFor="username">
            Your Name
            <input
              required
              ref={nameRef}
              onChange={onInputChange}
              value={state.cartReduser.order.name}
              type="text"
              id="username"
            />
          </label>
        </div>
        <div className={s.InputBody}>
          <label htmlFor="address">
            Address
            <input
              required
              ref={addressRef}
              onChange={onInputChange}
              value={state.cartReduser.order.address}
              type="text"
              id="address"
            />
          </label>
        </div>
        <div className={s.InputBody}>
          <label htmlFor="phone">
            Your phone number
            <input
              required
              ref={phoneRef}
              onChange={onInputChange}
              value={state.cartReduser.order.phone}
              type="text"
              id="phone"
            />
          </label>
        </div>
        <div className={s.SendButton}>
          <button type="submit">Send!</button>
        </div>
      </form>
      <div className={s.Overlay} />
    </div>
  );
}
