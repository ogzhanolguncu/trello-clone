import { createContext } from 'react';
import { User } from '@firebase/auth-types';

type ContextType = {
  user: User | null;
};

const UserContext = createContext<ContextType | null>(null);
export default UserContext;
