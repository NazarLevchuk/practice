import React, { useEffect, useState } from 'react'
import './TopBar.module.scss'
import s from './TopBar.module.scss'
import { TopBarNavigation } from './TopBarNavigation/TopBarNavigation'
import { TopBarLogo } from './TopBarLogo/TopBarLogo';
import { TopBarUserTools } from './TopBarUserTools/TopBarUserTools';
import { useLocation } from 'react-router-dom';
import { hendlerNavColorChangeActionCreator } from '../../../redux/topBarReducer';
import { BiMenuAltRight } from 'react-icons/bi'
import { TopBarNavigationBurger } from './TopBarNavigationBurger/TopBarNavigationBurger';



export const TopBar = ({ dispatch, setIsLoggedIn }) => {
	const [burger, setBurger] = useState(false)

	const [color, setColor] = useState('')

	const [scroll, setScroll] = useState(false);
	const location = useLocation();

	const handlerNavChange = () => dispatch(hendlerNavColorChangeActionCreator(setColor));

	useEffect(() => {

		if (window.location.pathname === '/') {
			setScroll(window.scrollY > 50);
			window.addEventListener("scroll", () => {
				handlerNavChange()
				setScroll(window.scrollY > 50);
			});
		} else {
			setScroll(window.scrollY > 30);
			window.addEventListener("scroll", () => {
				handlerNavChange()
				setScroll(window.scrollY > 30);
			});
		}

	}, [scroll, location]);

	useEffect(() => {
		handlerNavChange()
	}, [location])

	const toggleBurger = () => {
		document.querySelector('body').classList.toggle('_active')
		setBurger(!burger)
	}

	return (
		<div style={scroll ? { backgroundColor: `white`, opacity: '1' } : { backgroundColor: `transparent` }} className={s.MainTopBar} >
			<div className={s.MainTopBarContent} >
				<TopBarNavigation handlerNavChange={handlerNavChange} color={color} />
				<TopBarNavigationBurger handlerNavChange={handlerNavChange} burger={burger} toggleBurger={toggleBurger} />
				<TopBarLogo handlerNavChange={handlerNavChange} />
				<TopBarUserTools setIsLoggedIn={setIsLoggedIn} dispatch={dispatch} color={color} />
				<div className={s.TopBarToggle}>
					<BiMenuAltRight style={{
						height: `50px`, width: `50px`, fill: `${color}`
					}} onClick={toggleBurger} />
				</div>
			</div>
		</div>
	)
}

