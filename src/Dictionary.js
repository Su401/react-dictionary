import React, { useState } from 'react';
import Form from './controllers/form.js';
import Results from './controllers/results.js';
import './css/dictionary.css';

export default function Dictionary() {
	let [results, setResults] = useState(null);

	return (
		<div className='Dictionary container-fluid'>
			<div className='container p-3'>
				<Form defaultWord='shenanigans' onSearch={setResults} />
				<Results results={results} />
			</div>
		</div>
	);
}
