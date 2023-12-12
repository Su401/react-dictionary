import React from 'react';
import '../css/synonyms.css';

export default function Synonyms({ synonyms }) {
	return synonyms ? (
		<div className='Synonyms'>
			<ul>
				{synonyms.map((synonym) => (
					<li key={synonym}>{synonym}</li>
				))}
			</ul>
		</div>
	) : null;
}
