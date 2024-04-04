import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HeaderSpacer, Header } from './Shared';
import Unit1 from './Unit1';
import Unit2 from './Unit2';
import Unit3 from './Unit3';
import Unit4 from './Unit4';
import Unit5 from './Unit5';
import Unit6 from './Unit6';
import Unit7 from './Unit7';

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
	} else if (path == "/unit3") {
		return <Unit3/>
	} else if (path == "/unit4") {
		return <Unit4/>
	} else if (path == "/unit5") {
		return <Unit5/>
	} else if (path == "/unit6") {
		return <Unit6/>
	} else if (path == "/unit7") {
		return <Unit7/>
	} else {
		return <App/>
	}
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
