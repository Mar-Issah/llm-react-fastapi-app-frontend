import 'react';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import { Outlet, NavLink , Navigate } from 'react-router-dom';

const Layout = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className='main-layout'>
      <header className='main-header'>
        <div className='main-header-content'>
          <NavLink  to='/' className='main-title-link'>
            <p className='main-title'>Challenge Generator</p>
          </NavLink >
          <nav className='main-nav'>
            <SignedIn>
              {isLoaded && user && (
                <div className='welcome-message'>Welcome, {user.firstName || user.username || 'User'}!</div>
              )}
              <div className='main-nav-links'>
                <NavLink  className='main-nav-link' to='/'>
                  Generate Challenge
                </NavLink >
                <NavLink  className='main-nav-link' to='/history'>
                  History
                </NavLink >
              </div>

              <UserButton />
            </SignedIn>
          </nav>
        </div>
      </header>

      <main className='main-content'>
        <SignedOut>
          <Navigate to='/sign-in' replace />
        </SignedOut>
        <SignedIn>
          <Outlet />
        </SignedIn>
      </main>
    </div>
  );
};

export default Layout;
