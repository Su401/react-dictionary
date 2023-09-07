import React, { useState } from 'react';
import axios from 'axios';

export default function FormController({ onSearch }) {
	let [keyword, setKeyword] = useState('');

	function handleResponse(res) {
		onSearch(res.data);
	}

	function search(event) {
		event.preventDefault();
		let apiKey = '5d4be4co359dcfb3b02ea04bt4fdc01e';
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
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
