import React, { useState } from 'react';
import FormController from './controllers/formController.js';
import ResultsController from './controllers/resultsController.js';

export default function Dictionary() {
	let [results, setResults] = useState(null);

	return (
		<div className='Dictionary'>
			<FormController onSearch={setResults} defaultWord='shenanigans' />
			<ResultsController results={results} />
		</div>
	);
}
