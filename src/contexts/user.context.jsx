import { useReducer, createContext, useEffect } from 'react';
import {
  onAuthStateChangedListerner,
  createUserDocFromAuth,
} from '../Utils/firebase/firebase.utills';

export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setcurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setcurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListerner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setcurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
