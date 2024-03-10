import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { useMainContext } from '@/contexts/MainContext';
import SocialMediaLogin from '../ui/SocialMediaLogin';
import Logo from '../ui/Logo';

const LoginForm = () => {
	const { registerUser, signIn } = useMainContext();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isRegistered, setIsRegistered] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			if (isRegistered) {
				if (!username || !password) {
					setError('Field required!');
					return;
				}

				await signIn({ username, password });
				setError('');
			} else {
				if (!username || !email || !password) {
					setError('Field required!');
					return;
				}

				await registerUser({ username, email, password });
				setError('');
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			<Logo />

			<SocialMediaLogin actionLabel={isRegistered ? 'Sign in' : 'Register'} />

			<form onSubmit={handleSubmit} autoComplete='off' noValidate>
				<div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
					<p className='mx-4 mb-0 text-center font-semibold dark:text-white'>
						Or
					</p>
				</div>

				<h3 className='font-bold text-center'>Enter your credentials:</h3>

				<div>
					<label
						htmlFor='username'
						className='mt-4 block text-sm font-medium leading-6'
					>
						Username {isRegistered ? 'or email' : ''}
					</label>
					<div className='mt-2'>
						<input
							id='username'
							name='username'
							type='username'
							className='bg-transparent outline-none block w-full rounded-xl py-2 px-4 shadow-sm border-2 border-indigo-800 sm:text-sm sm:leading-6 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					{!username && error ? (
						<span className='text-xs text-red-500 pl-3'>{error}</span>
					) : null}
				</div>

				{!isRegistered ? (
					<div>
						<label
							htmlFor='email'
							className='mt-3 block text-sm font-medium leading-6'
						>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								className='bg-transparent outline-none block w-full rounded-xl py-2 px-4 shadow-sm border-2 border-indigo-800 sm:text-sm sm:leading-6 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						{!email && error ? (
							<span className='text-xs text-red-500 pl-3'>{error}</span>
						) : null}
					</div>
				) : null}

				<div>
					<label
						htmlFor='password'
						className='mt-3 block text-sm font-medium leading-6'
					>
						Password
					</label>
					<div className='mt-2 relative'>
						<input
							id='password'
							name='password'
							type={showPassword ? 'text' : 'password'}
							className='bg-transparent outline-none block w-full rounded-xl py-2 pl-4 pr-10 shadow-sm border-2 border-indigo-800 sm:text-sm sm:leading-6 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'
							onChange={e => setPassword(e.target.value)}
						/>
						<button
							type='button'
							className='outline-none rounded-full absolute inset-y-0 right-0 mr-3 flex items-center transition duration-150 hover:scale-110 focus:scale-110'
							onClick={togglePasswordVisibility}
						>
							{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
						</button>
					</div>
					{!password && error ? (
						<span className='text-xs text-red-500 pl-3'>{error}</span>
					) : null}
				</div>

				{isRegistered ? (
					<div className='mt-6 flex items-center justify-between'>
						<a
							href='#!'
							className='outline-none transition duration-150 ease-in-out shadow-text'
						>
							Forgot password?
						</a>
					</div>
				) : null}

				<div className='mt-6 text-center'>
					<button className='outline-none border-2 border-indigo-800 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'>
						{isRegistered ? 'Sign In' : 'Register'}
					</button>
				</div>
				<div className="className='mb-0 mt-3 pt-1 text-sm font-semibold'">
					<p>
						{isRegistered
							? "Don't have an account?"
							: 'Do you have an account?'}
						<button
							type='button'
							className='outline-none transition duration-150 ease-in-out ml-1 shadow-text'
							onClick={() => setIsRegistered(!isRegistered)}
						>
							{isRegistered ? 'Register' : 'Sign in'}
						</button>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
