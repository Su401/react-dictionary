import React, { useState } from 'react';
import FormController from './controllers/formController.js';
import ResultsController from './controllers/resultsController.js';

export default function Dictionary() {
	let [results, setResults] = useState({});

	return (
		<div className='Dictionary'>
			<FormController onSearch={setResults} />
			<ResultsController results={results} />
		</div>
	);
}
