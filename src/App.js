import './App.module.scss';
import { ContentPage } from './components/ContentPage/ContentPage';
import { LogInPage } from './components/LogInPage/LogInPage';
import s from './App.module.scss';
import {useState} from 'react'

function App() {

	const [closeLoginPage, setCloseLoginPage] = useState(true);
	const [name, setName] = useState('');
	const handlerChange = (name) => {
		setName(name)
	}

	return (
		<div className={s.App}>
			{closeLoginPage ? (
			<LogInPage onChange={handlerChange} setCloseLoginPage={setCloseLoginPage} />
			) : (<ContentPage name={name} />)}
		</div>
	);
}

export default App;
