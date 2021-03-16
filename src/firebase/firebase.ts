import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCv-21jgz5XnqIP3MXOv_QdhwFNu4L6Ekw',
  authDomain: 'trello-clone-cdeff.firebaseapp.com',
  projectId: 'trello-clone-cdeff',
  storageBucket: 'trello-clone-cdeff.appspot.com',
  messagingSenderId: '344906372033',
  appId: '1:344906372033:web:917ecbfc6721e197f8d540',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
