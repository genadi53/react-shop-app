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

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // const collectionRef = firestore.collection('users');
    // const collectionSnapshot = await collectionRef.get();
    // console.log(collectionRef, collectionSnapshot);
    // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data())});

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({ displayName, email, createdAt, ...additionalData })
        } catch(error){
            console.error('error')
            console.error(error.message)
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);
        batch.set(newDocRef, obj);
    })
    return await batch.commit();
}

export const convertCollectionsSnapstopToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    //console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}


if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }else {
    firebase.app(); // if already initialized, use that one
}

//firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase;