import React from 'react';

const IconButton = ({ children, btnClass = '', onClick = () => null }) => {
	return (
		<button
			className={`${btnClass} outline-none rounded-full transition duration-150 ease-in-out dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default IconButton;
