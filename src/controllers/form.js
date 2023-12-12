import React, { useState } from 'react';
import axios from 'axios';
import '../css/form.css';

export default function Form({ defaultWord, onSearch, onQuery }) {
	let [keyword, setKeyword] = useState(defaultWord);
	let apiKey = '5d4be4co359dcfb3b02ea04bt4fdc01e';
	let pexelsKey = 'z6DCVBafORQ0Apsrh7qOwheZHJDt7MZZZ4I7XbHpKtfqHibE2ouZgTOb';

	function handleResponse(res) {
		onSearch(res.data);
	}

	function handleImages(res) {
		onQuery(res.data.photos);
	}

	useState(
		() => {
			let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${defaultWord}&key=${apiKey}`;
			axios.get(apiUrl).then(handleResponse);
			let pexelsUrl = `https://api.pexels.com/v1/search?query=${defaultWord}`;
			axios
				.get(pexelsUrl, {
					headers: { Authorization: `${pexelsKey}` },
				})
				.then(handleImages);
		},
		{ defaultWord }
	);

	function search(event) {
		event.preventDefault();
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
		let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
		axios
			.get(pexelsUrl, {
				headers: { Authorization: `${pexelsKey}` },
			})
			.then(handleImages);
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
