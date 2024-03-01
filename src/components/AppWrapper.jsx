import React from 'react';

const AppWrapper = ({ children }) => {
	return (
		<div className='flex justify-center items-center h-screen'>{children}</div>
	);
};

export default AppWrapper;
