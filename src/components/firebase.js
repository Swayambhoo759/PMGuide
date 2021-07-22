import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC92woC1VLWWB8_Sp0-B3gKW0Mh5j9DJTc",
    authDomain: "pm-manager-ab8f2.firebaseapp.com",
    projectId: "pm-manager-ab8f2",
    storageBucket: "pm-manager-ab8f2.appspot.com",
    messagingSenderId: "558757006741",
    appId: "1:558757006741:web:d10a7afaf1e4d41024ba9c",
    measurementId: "G-MRXDTZ1C9B"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};
