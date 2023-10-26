import './App.css';

function App() {
  return (
    <div className="App">
		<img className='Arrow' src="Arrow.svg"></img>
		<header className="App-header">
			<p className='Title ExtraBig'>AP Human Geo</p>
		</header>
		<div className='App-body'>
			<p className='Title' id="nav">Pages</p>
			<a className='Title Smaller' href="/unit1">Unit 1: Thinking Geographically</a>
			<a className='Title Smaller' href="/unit2">Unit 2: Population and Migration P&P</a>
			<a className='Title Smaller' href="/unit3">Unit 3: Cultural P&P</a>
			<a className='Title Smaller' href="/unit4">Unit 4: Political P&P</a>
			<a className='Title Smaller' href="/unit5">Unit 5: Ag and Rural Land Use P&P</a>
			<a className='Title Smaller' href="/unit6">Unit 6: Industrial and Economic Dev P&P</a>
			<a className='Title Smaller' href="/unit7">Unit 7: Cities and Urban Land Use P&P</a>
 		</div>
    </div>
  );
}

export default App;