import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyAaZuXM2KcxedTv43DvsfqWXIADFx3StWA",
  authDomain: "expensify-8993c.firebaseapp.com",
  databaseURL: "https://expensify-8993c.firebaseio.com",
  projectId: "expensify-8993c",
  storageBucket: "expensify-8993c.appspot.com",
  messagingSenderId: "64194982367"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

