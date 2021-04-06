import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import 'firebase/storage';

const config: Object = {
    apiKey: "AIzaSyATTDi2UxVCcDDBXpxp1QaRqtLdYNWBX0g",
    authDomain: "pomodoro-c108c.firebaseapp.com",
    projectId: "pomodoro-c108c",
    storageBucket: "pomodoro-c108c.appspot.com",
    messagingSenderId: "348966800544",
    appId: "1:348966800544:web:2b98905a61d9c3ebc34dc5",
    measurementId: "G-8MLFY9JN51"
};

const app: firebase.app.App = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.firestore();
// export const storage = app.storage();
export const signOut = () => auth.signOut()
    .then((success) => {
        try {
            // localStorage.setItem("isLoggedIn", "false")
            console.log('[Logout] successful');
        } catch (err) {
            console.error('[Logout] error: ', err.message);
        }
    })
    .catch((err) => {
        console.error('[Logout] error: ', err.message);
    });


//if new user will create new document
export const createUserProfileDocument = async (user: any, additionalData?: any) => {
    if (!user) return;

    // Get a reference to the place in the database where a user profile might be.
    const userRef = database.collection('users').doc(user.uid);

    // Go and fetch the document from that location.
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.error('Error creating user', error.message);
        }
    }

    return getUserDocument(user.uid);
};

export const getUserDocument = async (uid: any) => {
    if (!uid) { return null };
    try {
        return database.collection('users').doc(uid);
    } catch (error) {
        console.error('Error fetching user', error.message)
    }
}

export const getCurrentUser = (auth: any) => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user: unknown) => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

export default app;
