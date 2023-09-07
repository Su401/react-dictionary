import React from 'react';
import Meanings from './meaningController';

export default function ResultsController(props) {
	console.log(props.results);

	if (props.results) {
		return (
			<div className='ResultsController'>
				<h2>{props.results.word}</h2>
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
