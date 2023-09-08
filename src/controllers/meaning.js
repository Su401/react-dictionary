import React from 'react';
import Synonyms from './synonyms';
import '../css/meanings.css';

export default function Meanings(props) {
	return (
		<div className='Meanings'>
			<h3>{props.meaning.partOfSpeech}</h3>
			<p className='definition'> {props.meaning.definition}</p>
			<p>
				<small>{props.meaning.example}</small>
			</p>
			<Synonyms synonyms={props.meaning.synonyms} />
		</div>
	);
}
