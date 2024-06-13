import { LoginEmailAndPassword, LogoutFireBaseProvider, RegisterWithEmaiAndPassword, signInGoogle } from "../../firebase/provider";
import { Login, checkingAuth, logout } from "./authSlice";

export const signWithGoogle = () => {

    return async (dispatch, getState) => {
        dispatch(checkingAuth());
        const result = await signInGoogle();
        console.log(result);
        if (!result.ok) {
            dispatch(logout(result.errorMessage));
        } else {
            dispatch(Login(result))
        }
    }
}
export const RegisterEmaiAndPassword = (email, password, displaName) => {
    return async (dispatch, getState) => {
        dispatch(checkingAuth());
        const result = await RegisterWithEmaiAndPassword(email, password, displaName);
        if (!result.ok) {
            dispatch(logout(result.errorMessage))
        } else {
            console.log(result);
            dispatch(Login(result));
        }
    }
}
export const LoginWithEmailAndPassword = (email, password) => {
    return async (dispatch, getState) => {
        dispatch(checkingAuth());
        const result = await LoginEmailAndPassword(email, password);

        if (!result.ok) {
            dispatch(logout(result.errorMessage))
        } else {
            dispatch(Login(result));
        }
    }
}
export const LogoutFireBase = () => {
    return async (dispatch) => {
        await LogoutFireBaseProvider();
        dispatch(logout(null));
    }
}