import React from 'react';
import '../css/images.css';

export default function Images(props) {
	console.log(props.images);
	if (props.images) {
		return (
			<div className='Images'>
				<div className='row '>
					{props.images.map(function (img, i) {
						return (
							<div className='col-4'>
								<a href={img.src.original}>
									<img
										className='img-sluid'
										src={img.src.original}
										alt={img.alt}
										key={i}
									/>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
