import React from 'react';
import Meanings from './meaning';
import '../css/results.css';

export default function Results(props) {
	if (props.results) {
		return (
			<div className='Results'>
				<h2>Word</h2>
				<h1>{props.results.word}</h1>
				<hr />
				<h2>Phonetic</h2>
				<p>/{props.results.phonetic}/</p>
				<h2>Definition</h2>
				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meanings meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
