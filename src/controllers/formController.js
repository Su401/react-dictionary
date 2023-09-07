import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const apiKey = '5d4be4co359dcfb3b02ea04bt4fdc01e';

export default function FormController({ onSearch, defaultWord }) {
	const [keyword, setKeyword] = useState(defaultWord);

	const handleResponse = useCallback(
		(res) => {
			onSearch(res.data);
		},
		[onSearch]
	);

	const handleError = useCallback((error) => {
		// Handle API errors here, e.g., display an error message to the user.
		console.error('API error:', error);
	}, []);

	useEffect(() => {
		if (keyword) {
			const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
			axios.get(apiUrl).then(handleResponse).catch(handleError);
		}
	}, [keyword, handleResponse, handleError]);

	function search(event) {
		event.preventDefault();
		// Perform a search only if the keyword is not empty.
		if (keyword) {
			const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
			axios.get(apiUrl).then(handleResponse).catch(handleError);
		}
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
					autoFocus={true}
				/>
				<input type='submit' value='Search' />
			</form>
		</div>
	);
}
