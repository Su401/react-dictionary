import React from 'react';
import Synonyms from './synonyms';

export default function Meanings(props) {
	return (
		<div className='Meanings'>
			<h3>{props.meaning.partOfSpeech}</h3>

			<p>{props.meaning.definition}</p>
			<p>{props.meaning.example}</p>
			<Synonyms synonyms={props.meaning.synonyms} />
		</div>
	);
}
