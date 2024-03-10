import Link from 'next/link';
import { GitHub } from 'react-feather';

const Footer = () => {
	return (
		<footer className='p-4 text-center bg-zinc-900'>
			<div className='container mx-auto'>
				<div className='flex justify-center pt-2'>
					<p>Developed by </p>
					<Link
						href='https://github.com/carloshrod'
						target='_blank'
						rel='noopener noreferrer'
						className='outline-none flex justify-center transition duration-150 ease-in-out ml-1 shadow-text'
					>
						<span className='font-bold'>CHRod</span>
						<GitHub className='m-auto' size={18} />
					</Link>
				</div>
				<div className='w-full border-b border-white mt-6'></div>
				<p className='text-xs mt-2 text-left'>
					© 2024 CHRod | All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
