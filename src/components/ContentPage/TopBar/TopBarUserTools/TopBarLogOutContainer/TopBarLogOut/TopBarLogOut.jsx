import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../../../../img/svg/arrow.svg';
import avatarHolder from '../../../../../../img/jpg/avatar.png'

import s from './TopBarLogOut.module.scss';

export function TopBarLogOut(props) {
	const removeUserData = () => {
		props.removeCurrentUserDataThunkCreator()
		props.setIsLoggedIn(false);
	};

	const avatarSelected = (e) => {
		if (e.target.files.length) {
			props.savePhotoThunkCreator(e.target.files[0])
		}
	}

	return (
		<div className={s.TopBarLogOut}>
			<button
				type="button"
				onClick={removeUserData}
				style={{ color: `${props.color}` }}
			>
				<ArrowIcon fill={props.color} width={20} height={20} />
				LogOut
			</button>
			<div className={s.avatarContainer}>
				<img src={props.uploadedPhoto || avatarHolder} alt="avatar" />
				<div className={s.inputContainer}>
					<label className={s.inputLabel} htmlFor="fileInput"></label>
					<input onChange={avatarSelected} className={s.fileInput} id='fileInput' type="file" />
				</div>
			</div>
		</div>
	);
}
