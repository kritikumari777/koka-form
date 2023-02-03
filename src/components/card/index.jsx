import React from 'react';

import './card.css';

const Card = ({ title, children }) => {
	return (
		<div className="card">
			<div className="card-wrapper">
				<h1 className="card-title">{title}</h1>
				{children}
			</div>
		</div>
	);
};

export default Card;
