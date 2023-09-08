import React, { useState } from 'react';
import Form from './controllers/form.js';
import Results from './controllers/results.js';

export default function Dictionary() {
	let [results, setResults] = useState(null);

	return (
		<div className='Dictionary'>
			<Form defaultWord='shenanigans' onSearch={setResults} />
			<Results results={results} />
		</div>
	);
}
