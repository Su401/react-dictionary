import React, { useState } from 'react';

export default function FormController() {
	let [keyword, setKeyword] = useState('');

	function search(event) {
		event.preventDefault();
		alert(`${keyword} it's on the way! `);
	}

	function handleKeyword(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className='FormController'>
			<form onSubmit={search}>
				<input
					type='search'
					placeholder='Search for a word...'
					onChange={handleKeyword}
				/>
				<input type='submit' value='Search' autoFocus={true} />
			</form>
		</div>
	);
}
