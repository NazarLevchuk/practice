import './App.module.scss';
import { ContentPage } from './components/ContentPage/ContentPage';
import { LogInPage } from './components/LogInPage/LogInPage';
import s from './App.module.scss'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {

	/* const [closeLoginPage, setCloseLoginPage] = useState(false
		localStorage.getItem('isLoggedIn')
	); */
	const [name, setName] = useState('');
	const handlerChange = (name) => {
		setName(name)
	}

	return (
		<div className={s.wrapper_App}>
			
			<Routes>
				<Route path='/contentpage' element={<ContentPage /* setCloseLoginPage={setCloseLoginPage} */ name={name} />} />
				<Route path='/' element={<LogInPage onChange={handlerChange} /* setCloseLoginPage={setCloseLoginPage} */ />} />
			</Routes>
		</div>
	);
}

export default App;

{/* <div className={s.App}>
					{closeLoginPage ? (
						(<ContentPage setCloseLoginPage={setCloseLoginPage} name={name} />)
					) : <LogInPage onChange={handlerChange} setCloseLoginPage={setCloseLoginPage} />}
				</div> */}