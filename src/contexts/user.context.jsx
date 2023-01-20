import { useState, createContext, useEffect } from 'react';
import { onAuthStateChangedListerner,createUserDocFromAuth } from '../Utils/firebase/firebase.utills';

export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const value = { currentUser, setcurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListerner((user) => {
      if(user){
        createUserDocFromAuth(user);
        console.log('user', user);
      }
      setcurrentUser(user);
    });
    
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
