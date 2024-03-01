import Link from 'next/link';
import { GitHub } from 'react-feather';

const Footer = () => {
	return (
		<footer className='bg-cyan-900 p-4 text-center'>
			<div className='container mx-auto'>
				<div className='flex justify-center pt-2'>
					<p>Developed by </p>
					<Link
						href='https://github.com/carloshrod'
						target='_blank'
						rel='noopener noreferrer'
						className='flex justify-center rounded-full hover:shadow-lg hover:shadow-cyan-800 px-1 pb-1'
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
