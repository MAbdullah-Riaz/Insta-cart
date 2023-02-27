import SignInForm from '../sign-in-form/sign-in.component';
import SignUpForm from '../sign-up-form/sign-up-form.component';
import './authentication.component.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
