import './App.css';

function App() {
  return (
    <div className="App">
		<img className='Arrow' src="Arrow.svg"></img>
		<TOC/>
		<header className="App-header">
			<p className='Title ExtraBig'>AP Human Geo</p>
		</header>
		<div className='App-body'>
        <p className='Title' id="background_information">THis is what the website looks like</p>
          <p className='Title Smaller'>I don't know what to put on it tho</p>
            <p className='BodyText'>blah bah</p>
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

function Tab() {
	return (<span style={{display: "inline-block", width: "4ch"}}>&#9;</span>);
}

function Ref(props) {
	return <sup><a className="TinyReference" href={props.href} target="_blank">[{props.number}]</a></sup>
}

export default App;