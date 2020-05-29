import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARjWHe6DRpv8e74urmOpxc4T7-uPMk4Dk",
    authDomain: "eventos-3198f.firebaseapp.com",
    databaseURL: "https://eventos-3198f.firebaseio.com",
    projectId: "eventos-3198f",
    storageBucket: "eventos-3198f.appspot.com",
    messagingSenderId: "903481488019",
    appId: "1:903481488019:web:02b1762b07c7be016c5366"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
