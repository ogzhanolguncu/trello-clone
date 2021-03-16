import { createContext } from 'react';
import Firebase from 'firebase/app';

type ContextType = {
  firebase: Firebase.app.App;
  FieldValue: typeof Firebase.firestore.FieldValue;
};

const FirebaseContext = createContext<ContextType | null>(null);
export default FirebaseContext;
