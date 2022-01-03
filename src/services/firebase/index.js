import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCpCw13sKPt9oJ2bgCHrJF215YqHdMIY8",
  authDomain: "buuk-eac11.firebaseapp.com",
  projectId: "buuk-eac11",
  storageBucket: "buuk-eac11.appspot.com",
  messagingSenderId: "699879704570",
  appId: "1:699879704570:web:5506edb994c5aa01208643",
  measurementId: "G-8BTGZ45XYK",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
