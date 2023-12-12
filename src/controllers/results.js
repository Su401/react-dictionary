import React from 'react';
import Meanings from './meaning';
import '../css/results.css';

export default function Results({ results, wordExists }) {
	if (results && results.meanings !== undefined) {
		if (results.meanings.length > 0) {
			return (
				<div className='Results'>
					<section>
						<h2>Word</h2>
						<h1>{results.word}</h1>
					</section>
					<hr />
					<section>
						<h2>Phonetic</h2>
						<p>/{results.phonetic}/</p>
					</section>
					<section>
						<h2>Definition</h2>
						{results.meanings.map((meaning, index) => (
							<div key={index}>
								<Meanings meaning={meaning} />
							</div>
						))}
					</section>
				</div>
			);
		} else {
			// Word found, but no meanings
			return (
				<p className='error-message'>No meanings found for the word.</p>
			);
		}
	} else if (results && results.message === 'Word not found') {
		// Word not found
		return (
			<p className='error-message'>
				Word not found. Please try another word.
			</p>
		);
	} else {
		// Handle other cases where results or meanings are undefined
		return null;
	}
}
