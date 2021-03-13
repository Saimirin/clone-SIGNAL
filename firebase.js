import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZF3o_CeXZK2MApwaVWEAmyxCIyK9lezY",
    authDomain: "clone-signal-6a84d.firebaseapp.com",
    projectId: "clone-signal-6a84d",
    storageBucket: "clone-signal-6a84d.appspot.com",
    messagingSenderId: "276329955804",
    appId: "1:276329955804:web:2bff487e1f3797aebb8f19",
    measurementId: "G-XFDJRFWBKH"
  };

  let app;

  if (firebase.apps.length === 0) {
    app= firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth }
  