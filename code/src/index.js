import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Unit1 from './Unit1';
import Unit2 from './Unit2';
import { HeaderSpacer, Header } from './Shared';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header/>
	<HeaderSpacer/>
    <RootApp/>
  </>
);

function RootApp(props) {
  /*return (
      <div>
        <RouterProvider router={router}/>
      </div>
  )*/
	let path = window.location.pathname;
	if (path == "/unit1") {
		return <Unit1/>
	} else if (path == "/unit2") {
		return <Unit2/>
	} else {
		console.log(path);
		return <App/>
	}
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
