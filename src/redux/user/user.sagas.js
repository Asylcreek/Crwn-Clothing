import { put, takeLatest, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
    auth,
    googleProvider,
    createUserProfileDocument,
} from '../../firebase/firebase.utils';

import { signInSuccess, signInFailure } from './user.actions';

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield signInFailure(error.message);
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapshotFromUserAuth, user);
    } catch (err) {
        signInFailure(err.message);
    }
}

export function* signInWithEmail({ payload }) {
    const { email, password } = payload;

    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield signInFailure(error.message);
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}