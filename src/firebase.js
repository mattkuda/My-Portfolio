import firebase from 'firebase'

var firebaseConfig ={ 
    apiKey: "AIzaSyDTs17YG9g2K6J4OEfm4CDWmnJgzxZMllE",
    authDomain: "fir-project-9147f.firebaseapp.com",
    databaseURL: "https://fir-project-9147f.firebaseio.com",
    projectId: "fir-project-9147f",
    storageBucket: "fir-project-9147f.appspot.com",
    messagingSenderId: "574834201796",
    appId: "1:574834201796:web:14d4318245c39e9fa8a591",
    measurementId: "G-BN1GE8YKK1"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
