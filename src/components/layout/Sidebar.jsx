import { useMainContext } from '@/contexts/MainContext';
import Image from 'next/image';
import { LogOut, User } from 'react-feather';
import Logo from '../ui/Logo';
import IconButton from '../ui/IconButton';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

const Sidebar = () => {
	const { authUser, setAuthUser } = useMainContext();

	const handleSignOut = async () => {
		await signOut(auth);
		setAuthUser(null);
	};

	return (
		<aside className='col-span-4 bg-zinc-900 rounded-r p-2'>
			<section className='flex justify-between items-center h-20 px-2'>
				<Logo />
				<div className='flex justify-center gap-4'>
					{authUser?.avatar ? (
						<Image
							className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
							src={authUser?.avatar}
							alt='avatar'
							width='30'
							height='30'
						/>
					) : (
						<User
							className='inline-block rounded-full ring-2 ring-white'
							size={35}
						/>
					)}
					<IconButton onClick={handleSignOut}>
						<LogOut size={20} />
					</IconButton>
				</div>
			</section>

			<section className='mt-2'>
				<span className='text-xl font-bold ml-4'>Chats</span>
				<nav className='mt-3 h-responsive overflow-y-auto'>
					<ul>
						<li>
							<div className='flex items-center bg-zinc-800 outline-none w-full py-3 px-5 mb-3 rounded-xl shadow-sm cursor-pointer hover:shadow-[0_-4px_10px_-4px_rgba(59,113,202,0.1),0_4px_10px_-4px_rgba(59,113,202,0.1)]'>
								<User
									className='rounded-full ring-2 ring-white mr-3'
									size={18}
								/>
								Valeca
							</div>
						</li>
						<li>
							<div className='flex items-center outline-none w-full py-3 px-5 mb-3 rounded-xl shadow-sm cursor-pointer hover:shadow-[0_-4px_10px_-4px_rgba(59,113,202,0.1),0_4px_10px_-4px_rgba(59,113,202,0.1)]'>
								<User
									className='rounded-full ring-2 ring-white mr-3'
									size='18'
								/>
								Orianna
							</div>
						</li>
						<li>
							<div className='flex items-center outline-none w-full py-3 px-5 mb-3 rounded-xl shadow-sm cursor-pointer hover:shadow-[0_-4px_10px_-4px_rgba(59,113,202,0.1),0_4px_10px_-4px_rgba(59,113,202,0.1)]'>
								<User
									className='rounded-full ring-2 ring-white mr-3'
									size='18'
								/>
								Carlos
							</div>
						</li>
						<li>
							<div className='flex items-center outline-none w-full py-3 px-5 mb-3 rounded-xl shadow-sm cursor-pointer hover:shadow-[0_-4px_10px_-4px_rgba(59,113,202,0.1),0_4px_10px_-4px_rgba(59,113,202,0.1)]'>
								<User
									className='rounded-full ring-2 ring-white mr-3'
									size='18'
								/>
								Maribel
							</div>
						</li>
					</ul>
				</nav>
			</section>
		</aside>
	);
};

export default Sidebar;
