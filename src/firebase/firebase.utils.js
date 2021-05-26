import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBi8RYMiuWgqLDev7CEwyBw1_8KYpunD2k",
    authDomain: "shop-app-6f9ed.firebaseapp.com",
    projectId: "shop-app-6f9ed",
    storageBucket: "shop-app-6f9ed.appspot.com",
    messagingSenderId: "238503342442",
    appId: "1:238503342442:web:cfa17568103b735ef4b513",
    measurementId: "G-DVSPNHXF5D"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;