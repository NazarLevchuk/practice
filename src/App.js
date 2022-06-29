import './App.module.scss';
import { ContentPage } from './components/ContentPage/ContentPage';
import { LogInPage } from './components/LogInPage/LogInPage';
import s from './App.module.scss'
import { useState } from 'react'
import { connect } from 'react-redux'

function App({store}) {



	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'))
	
	let mapStateToProps = (state) => {
		return {
			state: state,
			setIsLoggedIn: setIsLoggedIn,
		}
	}
	let mapStoreToProps = (dispatch) => {
		return {
			dispatch: dispatch,
	}}

	const LogInPageContainer = connect(mapStateToProps, mapStoreToProps)(LogInPage)

		return (
			<div className={s.wrapper_App}>
				{isLoggedIn ? (
					<>
						<ContentPage setIsLoggedIn={setIsLoggedIn} store={store} />
					</>) : (
					<>
						<LogInPageContainer />
					</>)
				}
			</div>
		);
	}

export default App;
