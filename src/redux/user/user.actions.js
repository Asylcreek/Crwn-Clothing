import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
});

export const googleSignInFailure = (message) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: message,
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user,
});

export const emailSignInFailure = (message) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: message,
});