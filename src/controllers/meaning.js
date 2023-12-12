import React from 'react';
import Synonyms from './synonyms';
import '../css/meanings.css';

export default function Meanings({ meaning }) {
	if (!meaning) {
		return null;
	}

	const { partOfSpeech, definition, example, synonyms } = meaning;

	return (
		<div className='Meanings'>
			<h3>{partOfSpeech}</h3>
			<p className='definition'>{definition}</p>
			{example && (
				<p>
					<small>{example}</small>
				</p>
			)}
			<Synonyms synonyms={synonyms} />
		</div>
	);
}
