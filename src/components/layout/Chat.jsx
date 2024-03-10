'use client';
import { useMainContext } from '@/contexts/MainContext';
import { db } from '@/firebase';
import {
	collection,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ChatHeader from './ChatHeader';
import ChatForm from '../forms/ChatForm';

const Chat = () => {
	const { authUser } = useMainContext();
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const messagesRef = collection(db, 'messages');

	useEffect(() => {
		const queryMessages = query(messagesRef, orderBy('createdAt'));
		const unsub = onSnapshot(queryMessages, snapshot => {
			const res = [];
			snapshot.forEach(doc => {
				res.push({ ...doc.data(), id: doc.id });
			});
			setMessages(res);
		});

		return () => unsub();
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			if (!message) return null;
			const msgId = uuid();
			await setDoc(doc(db, 'messages', msgId), {
				id: msgId,
				body: message,
				from: authUser?.username,
				createdAt: serverTimestamp(),
			});
			setMessage('');
			console.log('Message sent!');
		} catch (error) {
			console.error(error.message);
		}
	};

	const formatCreatedAt = time => {
		const msTime =
			time?.seconds * 1000 + Math.round(time?.nanoseconds / 1000000);

		const date = new Date(msTime);

		let hour = date.getHours();
		const minutes = date.getMinutes();

		const period = hour >= 12 ? 'pm' : 'am';

		hour = hour % 12 || 12;

		return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
	};

	return (
		<div className='col-span-8 bg-zinc-900 rounded-l'>
			<ChatHeader />
			<div className='chat px-4 py-6 flex flex-col h-responsive overflow-y-auto'>
				{messages.length > 0 ? (
					messages.map((msg, i) => {
						const isLoggedUser =
							msg?.from.toLowerCase() === authUser?.username?.toLowerCase();
						return (
							<div key={`msg-${i}`} className='flex flex-col mb-4'>
								<div className={`flex ${isLoggedUser ? 'justify-end' : ''}`}>
									<div
										className={`text-white py-1 px-4 rounded-lg ${!isLoggedUser ? 'bg-zinc-800 rounded-tl-none' : 'bg-indigo-800 rounded-tr-none'}`}
									>
										{msg?.body}
									</div>
								</div>
								<p
									className={`text-indigo-700 mt-1 text-sm ${isLoggedUser ? 'text-right' : 'text-left'}`}
								>
									{formatCreatedAt(msg?.createdAt)}
								</p>
							</div>
						);
					})
				) : (
					<h1 className='text-3xl text-indigo-800 font-bold m-auto'>
						No messages to show
					</h1>
				)}
			</div>
			<ChatForm
				handleSubmit={handleSubmit}
				message={message}
				setMessage={setMessage}
			/>
		</div>
	);
};

export default Chat;
