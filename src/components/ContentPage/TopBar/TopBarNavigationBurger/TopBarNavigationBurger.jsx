import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './TopBarNavigationBurger.module.scss';

export function TopBarNavigationBurger({
  handlerNavChange,
  burger,
  toggleBurger,
}) {
  return (
    <div
      className={s.TopBarNavigationContainer}
      style={
        burger
          ? { display: 'block', opacity: '1' }
          : { display: 'none', opacity: '1' }
      }
    >
      <div className={s.CloseButtonContainer} onClick={toggleBurger}>
        <button className={s.CloseButton} />
      </div>
      <ul>
        <li
          onClick={() => {
            handlerNavChange();
            toggleBurger();
          }}
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          onClick={() => {
            handlerNavChange();
            toggleBurger();
          }}
        >
          <NavLink to="/products">Products</NavLink>
        </li>
        <li
          onClick={() => {
            handlerNavChange();
            toggleBurger();
          }}
        >
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}
