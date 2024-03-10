import { MoreHorizontal, User } from 'react-feather';
import IconButton from '../ui/IconButton';

const ChatHeader = () => {
	return (
		<header className='flex justify-between items-center px-5 h-14 rounded shadow-[0_5px_5px_rgba(0,0,0,0.1)]'>
			<User
				className='inline-block rounded-full ring-2 ring-white'
				color='#3730a3'
				size={28}
			/>
			<IconButton>
				<MoreHorizontal />
			</IconButton>
		</header>
	);
};

export default ChatHeader;
