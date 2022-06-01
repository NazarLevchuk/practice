import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderTree = () => {

	root.render(
		<React.StrictMode>
			<Router>
				<App store={store} />
			</Router>
		</React.StrictMode>
	);
}
rerenderTree(store)
store.rerender(rerenderTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
