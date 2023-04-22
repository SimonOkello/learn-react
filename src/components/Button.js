import React from 'react';
import T from 'prop-types';

Button.propTypes = {
	text: T.string,
	color: T.string,
	onClick: T.func,
};

Button.defaultProps = {
	text: 'Click Me',
	color: 'red',
};
export default function Button({ text, color, onClick }) {
	return (
		<button style={{ backgroundColor: color }} onClick={onClick}>
			{text}
		</button>
	);
}
