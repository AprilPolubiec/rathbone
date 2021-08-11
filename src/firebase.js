import firebase from 'firebase';

// Secure file that is not in source control
const CONFIG  = require('./.config')

const firebaseConfig = CONFIG.firebase;

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()