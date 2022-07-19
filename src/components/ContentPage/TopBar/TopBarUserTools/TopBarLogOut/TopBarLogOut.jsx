import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../../../img/svg/arrow.svg';
import { removeUserDataActionCreator } from '../../../../../redux/loggInReducer';
import s from './TopBarLogOut.module.scss';

export function TopBarLogOut({ color, dispatch, setIsLoggedIn }) {
  const removeUserData = () => {
    dispatch(removeUserDataActionCreator());
    setIsLoggedIn(localStorage.getItem('login'));
  };

  return (
    <div className={s.TopBarLogOut}>
      <button
        type="button"
        onClick={removeUserData}
        style={{ color: `${color}` }}
      >
        <ArrowIcon fill={color} width={20} height={20} />
        LogOut
      </button>
    </div>
  );
}
