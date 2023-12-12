import React from 'react';
import '../css/images.css';

export default function Images({ images }) {
	return images ? (
		<div className='Images'>
			<div className='row'>
				{images.map((img, i) => (
					<div className='col-4' key={i}>
						<a href={img.src.original}>
							<img
								className='img-fluid'
								src={img.src.original}
								alt={img.alt}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	) : null;
}
