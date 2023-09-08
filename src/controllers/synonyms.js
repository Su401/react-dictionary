import React from 'react';

export default function Synonyms(props) {
	console.log(props);
	if (props.synonyms) {
		return (
			<div className='Synonyms'>
				{props.synonyms.map(function (synonym, index) {
					return (
						<ul>
							<li key={index}>{synonym}</li>
						</ul>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
