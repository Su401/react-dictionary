import React from 'react';
import Meanings from './meaning';
import '../css/results.css';

export default function Results({ results }) {
	if (!results || !results.meanings || results.meanings.length === 0) {
		return null;
	}

	return results ? (
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
	) : null;
}
