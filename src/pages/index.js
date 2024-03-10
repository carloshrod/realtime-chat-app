import Footer from '@/components/layout/Footer';
import Chat from '@/components/layout/Chat';
import LoginForm from '@/components/forms/LoginForm';
import { useMainContext } from '@/contexts/MainContext';
import Sidebar from '@/components/layout/Sidebar';
import AppWrapper from '@/components/layout/AppWrapper';

export default function Home() {
	const { authUser } = useMainContext();

	return (
		<main>
			{authUser ? (
				<AppWrapper>
					<Sidebar />
					<Chat />
				</AppWrapper>
			) : (
				<LoginForm />
			)}
			<Footer />
		</main>
	);
}
