import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateCurrentUser, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";



const googleProvider = new GoogleAuthProvider();

export const signInGoogle = async () => {
    try {
        const { user } = await signInWithPopup(FireBaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = user;
        const errorMessage = null;
        return {
            ok: true,
            displayName, email, photoURL, uid, errorMessage
        }

    } catch (error) {
        const errorMessage = error.message;
        return { ok: false, errorMessage: errorMessage, };
    }

}
export const RegisterWithEmaiAndPassword = async (email, password, displayName) => {
    try {
        const resp = await createUserWithEmailAndPassword(FireBaseAuth, email, password);
        updateProfile(FireBaseAuth.currentUser, { displayName });
        console.log(resp);
        const { uid, photoURL } = resp.user;
        return {
            ok: true,
            displayName, email, uid, photoURL, errorMessage: null
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false, errorMessage: error.message
        }
    }
}
export const LoginEmailAndPassword = async (email, password) => {
    try {
        const resp = await signInWithEmailAndPassword(FireBaseAuth, email, password);
        const { displayName, photoURL, uid } = resp.user
        return {
            ok: true,
            displayName, photoURL, uid, email, errorMessage: null
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false, errorMessage: error.message
        }
    }
}
export const LogoutFireBaseProvider = async () => {
    return await FireBaseAuth.signOut();
}