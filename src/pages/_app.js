import MainProvider from '@/contexts/MainContext';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	);
}
