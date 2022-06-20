import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb">
		<circle cx="130" cy="120" r="110" />
		<rect x="0" y="273" rx="10" ry="10" width="260" height="30" />
		<rect x="0" y="320" rx="10" ry="10" width="260" height="72" />
		<rect x="130" y="410" rx="25" ry="25" width="130" height="45" />
		<rect x="0" y="415" rx="10" ry="10" width="110" height="30" />
	</ContentLoader>
);

export default PizzaSkeleton;
