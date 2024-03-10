import { useMainContext } from '@/contexts/MainContext';
import { GoogleAuthProvider } from 'firebase/auth';
import IconButton from './IconButton';

const googleProvider = new GoogleAuthProvider();

const SocialMediaLogin = ({ actionLabel }) => {
	const { signInWithProvider } = useMainContext();

	return (
		<div className='flex flex-row items-center justify-center'>
			<p className='mb-0 mr-1 text-lg'>{actionLabel} with</p>

			<IconButton
				btnClass='mx-1 h-9 w-9 border-2 border-indigo-800'
				onClick={() => signInWithProvider(googleProvider)}
			>
				<svg
					className='mx-auto h-3.5 w-3.5'
					fill='currentColor'
					viewBox='0 0 48 48'
				>
					<path d='M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z' />
				</svg>
			</IconButton>

			{/* <button
				type='button'
				data-te-ripple-init
				data-te-ripple-color='light'
				className='mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white border-2 border-indigo-800 transition duration-150 ease-in-out dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='mx-auto h-3.5 w-3.5'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
				</svg>
			</button>

			<button
				type='button'
				data-te-ripple-init
				data-te-ripple-color='light'
				className='mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white border-2 border-indigo-800 transition duration-150 ease-in-out dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)]'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='mx-auto h-3.5 w-3.5'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
				</svg>
			</button> */}
		</div>
	);
};

export default SocialMediaLogin;
