import React, { useState } from 'react';
import axios from 'axios';
import '../css/form.css';

export default function Form({ defaultWord, onSearch }) {
	let [keyword, setKeyword] = useState(defaultWord);
	let apiKey = '5d4be4co359dcfb3b02ea04bt4fdc01e';

	function handleResponse(res) {
		onSearch(res.data);
	}

	useState(
		() => {
			let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${defaultWord}&key=${apiKey}`;
			axios.get(apiUrl).then(handleResponse);
		},
		{ defaultWord }
	);

	function search(event) {
		event.preventDefault();
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeyword(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className='Form'>
			<form onSubmit={search} className='input-group mb-3 row m-auto'>
				<input
					type='search'
					placeholder='Search for a word...'
					onChange={handleKeyword}
					class='btn btn-secondary col-8'
				/>
				<input
					type='submit'
					value='Search'
					class='btn btn-outline-secondary col-4'
				/>
			</form>
		</div>
	);
}
