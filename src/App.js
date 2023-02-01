import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Authentication from './components/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import {
  onAuthStateChangedListerner,
  createUserDocFromAuth,
} from './Utils/firebase/firebase.utills';
import { setcurrentUser } from './store/user/user.action';
// import { createAction } from './Utils/reducer/reducer.utills';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListerner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setcurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
