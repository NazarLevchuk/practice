import React from 'react'
import { ReactComponent as Logo } from '../../../../../img/svg/Logo.svg'
import s from './TopBarLogo.module.scss'
export const TopBarLogo = () => {
	return (
		<div className={s.Logo_container}>
			<Logo  />
		</div>
	)
}
