import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '@/firebase';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	where,
} from 'firebase/firestore';

const MainContext = createContext(undefined);

const usersCollectionRef = collection(db, 'users');

const MainProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState('');

	useEffect(() => {
		onAuthStateChanged(auth, async currentUser => {
			try {
				if (currentUser) {
					const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
					setAuthUser(userDoc.data());
				}
			} catch (error) {
				console.error(error.message);
			}
		});
	}, []);

	const registerUser = async ({ username, email, password }) => {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const { user } = userCredential;
		await setDoc(doc(usersCollectionRef, user.uid), {
			username,
			email,
			id: user.uid,
		});
	};

	const getUserInfo = async username => {
		const q = query(collection(db, 'users'), where('username', '==', username));
		const querySnapshot = await getDocs(q);
		let result;
		querySnapshot.forEach(doc => {
			result = doc.data();
		});

		return result;
	};

	const signIn = async ({ username, password }) => {
		if (username?.includes('@')) {
			await signInWithEmailAndPassword(auth, username, password);
		} else {
			const { email } = await getUserInfo(username);
			await signInWithEmailAndPassword(auth, email, password);
		}
	};

	const signInWithProvider = async provider => {
		try {
			const res = await signInWithPopup(auth, provider);
			const user = res.user;
			console.log(user);
			await setDoc(doc(usersCollectionRef, user.uid), {
				username: user?.displayName,
				email: user?.email,
				id: user?.uid,
				avatar: user?.photoURL ?? '',
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	const data = {
		authUser,
		setAuthUser,
		registerUser,
		signIn,
		signInWithProvider,
	};

	return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
export default MainProvider;
