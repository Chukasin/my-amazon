import firebase from './firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCW0z5MUfaqyhaDzibalxETebyTsyJIarI",
  authDomain: "challenge-66af1.firebaseapp.com",
  databaseURL: 'https//challenge-66af1.firebaseapp.com',
  projectId: "challenge-66af1",
  storageBucket: "challenge-66af1.appspot.com",
  messagingSenderId: "342459093506",
  appId: "1:342459093506:web:796595c0b4247371398d1b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };