import * as firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANvYkOlcIza7NOf0c2kCv7jjWuEVCmFP8",
    authDomain: "klostergata33.firebaseapp.com",
    databaseURL: "https://klostergata33.firebaseio.com",
    projectId: "klostergata33",
    storageBucket: "klostergata33.appspot.com",
    messagingSenderId: "316365648507",
    appId: "1:316365648507:web:063ae67f600a95cf0c68de"
  };

const setupDatabaseConnection = async () => {
    let db = firebase.initializeApp(firebaseConfig);
    let store = db.firestore();
    const washes = await store.collection("washes").get();
    washes.forEach((doc) => {
        console.log(doc.data);
    })
}

export default setupDatabaseConnection;