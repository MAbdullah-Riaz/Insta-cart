import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Shop from './routes/shop/shop.component';
import Authentication from './components/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      {/* <Redirect from='/Insta-cart' to='/' /> */}
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
