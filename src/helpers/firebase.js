import firebase from 'firebase';

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCdbxH4SATPjcJZZIFc17atuPjjg3DQdSE",
    authDomain: "credit-cards-558de.firebaseapp.com",
    projectId: "credit-cards-558de",
    storageBucket: "credit-cards-558de.appspot.com",
    messagingSenderId: "696582497074",
    appId: "1:696582497074:web:6fd1da0e9d824656ba6d2b"
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
