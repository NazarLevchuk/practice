import './App.module.scss';
import { ContentPage } from './components/ContentPage/ContentPage';
import { LogInPage } from './components/LogInPage/LogInPage';
import s from './App.module.scss'
import { useState } from 'react'

function App({store}) {



	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'))
	

		return (
			<div className={s.wrapper_App}>
				{isLoggedIn ? (
					<>
						<ContentPage setIsLoggedIn={setIsLoggedIn} store={store} />
					</>) : (
					<>
						<LogInPage store={store} state={store.getState.bind(store)} dispatch={store.dispatch.bind(store)} setIsLoggedIn={setIsLoggedIn} />
					</>)
				}
			</div>
		);
	}


export default App;
