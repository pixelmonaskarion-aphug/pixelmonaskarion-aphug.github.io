import './App.css';

function App() {
  return (
    <div className="App">
		<Header/>
		<img className='Arrow' src="Arrow.svg"></img>
		<TOC/>
		<header className="App-header">
			<p className='Title ExtraBig'>AP Human Geo</p>
		</header>
		<div className='App-body'>
			<p className='Title' id="background_information">Website</p>
			<p className='Title Smaller'>This is my website for AP Human Geography</p>
			<p className='BodyText'>this part will change when I add something else from Unit 1 and 2</p>
 		</div>
    </div>
  );
}

function TOC() {
	return (
	<div className='TOC'>
		<p>Table of Contents</p>
		<a href='#background_information'> idk</a>
	</div>
	)
}

function Header() {
	return (
		<div className='Header'>
			<span>Pages</span>
			<a href='#background_information'> idk</a>
		</div>
	)
}

function Tab() {
	return (<span style={{display: "inline-block", width: "4ch"}}>&#9;</span>);
}

function Ref(props) {
	return <sup><a className="TinyReference" href={props.href} target="_blank">[{props.number}]</a></sup>
}

export default App;