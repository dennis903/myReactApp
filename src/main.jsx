import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import App from './App.jsx';
import Calculator from './components/calculator/Calculator.jsx';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		children: [
// 			{
// 				path: '/calculator',
// 				element: <Calculator />
// 			}
// 		]
// 	},
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
