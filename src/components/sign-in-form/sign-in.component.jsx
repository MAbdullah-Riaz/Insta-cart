// import { async } from '@firebase/util';
import { UserContext } from '../../contexts/user.context';
import { useState, useContext } from 'react';
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../Utils/firebase/firebase.utills';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setcurrentUser } = useContext(UserContext);

  const resetFormField = () => {
    setformFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // await createUserDocFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setcurrentUser(user);
      resetFormField(defaultFormFields);
    } catch (error) {
      switch (error) {
        case 'auth/wrong-password':
          alert('Username or password does not matches');
          break;
        case 'auth/user-not-found':
          alert('Username or password does not matches');
          break;
        default:
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>{' '}
          {/* <Button buttonType='google' onClick={signInWithGoogle}>
            Google Sign In(pop)
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
