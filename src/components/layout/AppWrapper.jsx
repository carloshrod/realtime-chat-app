const AppWrapper = ({ children }) => {
	return (
		<div className='grid grid-cols-12 bg-zinc-800 gap-x-0.5 py-0.5'>
			{children}
		</div>
	);
};

export default AppWrapper;
