import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from '../../Utils/firebase/firebase.utills';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user);
      }
    })();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h2>i am at SignIn Page</h2>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
