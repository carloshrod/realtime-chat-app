import React from 'react';
import { Send } from 'react-feather';
import IconButton from '../ui/IconButton';

const ChatForm = ({ handleSubmit, message, setMessage }) => {
	return (
		<form
			onSubmit={handleSubmit}
			className='flex gap-2 shadow-[0_-5px_5px_rgba(0,0,0,0.1)] py-4 px-6'
			autoComplete='off'
		>
			<input
				name='message'
				type='text'
				placeholder='Write your message...'
				className='bg-transparent outline-none block w-full rounded-xl py-1.5 px-4 shadow-sm border-2 border-indigo-800 sm:text-sm sm:leading-6 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'
				onChange={e => setMessage(e.target.value)}
				value={message}
				autoFocus
			/>
			{/* <button className='outline-none border-2 border-indigo-800 inline-block rounded-full bg-primary px-3 text-sm font-medium transition duration-150 ease-in-out dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'>
				<Send />
			</button> */}
			<IconButton btnClass='border-2 border-indigo-800 px-3'>
				<Send />
			</IconButton>
		</form>
	);
};

export default ChatForm;
