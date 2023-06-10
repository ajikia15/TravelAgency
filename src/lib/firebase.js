import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { signInAnonymously } from 'firebase/auth';
import { getApp, getApps, deleteApp } from 'firebase/app';
export const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	databaseURL: import.meta.env.VITE_DATABASEURL,
	projectId: import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APPID,
	measurementId: import.meta.env.VITE_MEASUREMENTID
};

let firebaseApp;

if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApp();
	deleteApp(firebaseApp);
	firebaseApp = initializeApp(firebaseConfig);
}
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
signInAnonymously(auth)
	.then((userCredential) => {
		const user = userCredential.user;
		// console.log('Anonymous user ID:', user.uid);
	})
	.catch((error) => {
		console.error('Anonymous login failed:', error);
	});
