import './App.module.scss';
import { ContentPage } from './components/ContentPage/ContentPage';
import { LogInPage } from './components/LogInPage/LogInPage';
import s from './App.module.scss'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { state } from './state/state'
import { userData } from './state/state'
function App() {

	const [name, setName] = useState('');
	const handlerChange = (name) => {
		setName(name)
	}

	return (
		<div className={s.wrapper_App}>
			<Routes>
				<Route path='/contentpage' element={<ContentPage state={state} name={name} />} />
				<Route path='/' element={<LogInPage userData={userData} onChange={handlerChange} />} />
			</Routes>
		</div>
	);
}

export default App;
