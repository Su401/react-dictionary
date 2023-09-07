import React, { useState } from 'react';
import FormController from './controllers/formController.js';
import ResultsController from './controllers/resultsController.js';

export default function Dictionary() {
	let [results, setResults] = useState(null);

	return (
		<div className='Dictionary'>
			<FormController defaultWord='shenanigans' onSearch={setResults} />
			<ResultsController results={results} />
		</div>
	);
}
