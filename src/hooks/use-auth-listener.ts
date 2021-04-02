import { useState, useEffect, useContext } from 'react';

import FirebaseContext from 'contexts/firebaseContext';
import { User } from '@firebase/auth-types';

export default function useAuthListener() {
  const [user, setUser] = useState<User | null>(() =>
    JSON.parse(localStorage.getItem('authUser') || '{}'),
  );
  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebaseContext?.firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener?.();
  }, [firebaseContext?.firebase]);

  return { user };
}
