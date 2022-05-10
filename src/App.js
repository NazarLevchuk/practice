import './App.module.scss';
import { ContentPage } from './components/ContentPage/ContentPage';
import { LogInPage } from './components/LogInPage/LogInPage';
import s from './App.module.scss';
import {useState} from 'react'

function App() {

	const [closeLoginPage, setCloseLoginPage] = useState(false
		/* localStorage.getItem('isLoggedIn') */
	);
	const [name, setName] = useState('');
	const handlerChange = (name) => {
		setName(name)
	}

	return (
		<div className={s.App}>
			{closeLoginPage ? (
			(<ContentPage setCloseLoginPage={setCloseLoginPage} name={name} />)
			) : <LogInPage onChange={handlerChange} setCloseLoginPage={setCloseLoginPage} />}
		</div>
	);
}

export default App;
