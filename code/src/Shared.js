function HeaderSpacer() {
    return <div className="HeaderSpacer"></div>;
}

function Header() {
	return (
		<div className='Header'>
			<span className='HeaderNav'>Pages</span>
			<a className='HeaderNav' href='/unit1'>Unit 1</a>
			<a className='HeaderNav' href='/unit2'>Unit 2</a>
			<a className='HeaderNav' href='/unit3'>Unit 3</a>
			<a className='HeaderNav' href='/unit4'>Unit 4</a>
			<a className='HeaderNav' href='/unit5'>Unit 5</a>
			<a className='HeaderNav' href='/unit6'>Unit 6</a>
			<a className='HeaderNav' href='/unit7'>Unit 7</a>
		</div>
	)
}

export {HeaderSpacer, Header};