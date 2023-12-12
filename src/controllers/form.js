import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/form.css';

const apiKey = process.env.REACT_APP_API_KEY;
const pexelsKey = process.env.REACT_APP_PEXELS_KEY;

export default function Form({
	defaultWord,
	onSearch,
	onQuery,
	setWordExists,
}) {
	const [keyword, setKeyword] = useState(defaultWord);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${defaultWord}&key=${apiKey}`;
				const dictionaryResponse = await axios.get(dictionaryUrl);
				const responseData = dictionaryResponse.data;

				if (responseData.error) {
					setWordExists(false);
				} else {
					setWordExists(true);
					handleResponse(responseData);
					const pexelsUrl = `https://api.pexels.com/v1/search?query=${defaultWord}`;
					const pexelsResponse = await axios.get(pexelsUrl, {
						headers: { Authorization: `${pexelsKey}` },
					});
					handleImages(pexelsResponse.data.photos);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [defaultWord]);

	const handleResponse = (data) => {
		onSearch(data);
	};

	const handleImages = (photos) => {
		onQuery(photos);
	};

	const search = async (event) => {
		event.preventDefault();
		try {
			const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
			const dictionaryResponse = await axios.get(dictionaryUrl);
			const responseData = dictionaryResponse.data;

			if (responseData.error) {
				setWordExists(false);
			} else {
				setWordExists(true);
				handleResponse(responseData);
				const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
				const pexelsResponse = await axios.get(pexelsUrl, {
					headers: { Authorization: `${pexelsKey}` },
				});
				handleImages(pexelsResponse.data.photos);
			}
		} catch (error) {
			console.error('Error searching:', error);
		}
	};

	const handleKeyword = (event) => {
		setKeyword(event.target.value);
	};

	return (
		<div className='Form'>
			<form onSubmit={search} className='input-group mb-3 row m-auto'>
				<input
					type='search'
					placeholder='Search for a word...'
					onChange={handleKeyword}
					className='btn btn-secondary col-8'
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-outline-secondary col-4'
				/>
			</form>
		</div>
	);
}
