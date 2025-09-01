import 'react';
import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthenticationPage = () => {
  return (
    <div className='authentication-wrapper'>
      {/* <ToastContainer /> */}
      <SignedOut>
        <SignIn routing='path' path='/sign-in' signUpUrl='/sign-up' />
        <SignUp routing='path' path='/sign-up' signInUrl='/sign-in' />
      </SignedOut>
      <SignedIn>
        <div className='redirect-message'>
          <p>You are already signed in.</p>
        </div>
      </SignedIn>
    </div>
  );
};
export default AuthenticationPage;
