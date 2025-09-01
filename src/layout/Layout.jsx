import 'react';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import { Outlet, Link, Navigate } from 'react-router-dom';

const Layout = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className='main-layout'>
      <header className='main-header'>
        <div className='main-header-content'>
          <Link to='/' className='main-title-link'>
            <p className='main-title'>Challenge Generator</p>
          </Link>
          <nav className='main-nav'>
            <SignedIn>
              {isLoaded && user && (
                <div className='welcome-message'>Welcome, {user.firstName || user.username || 'User'}!</div>
              )}
              <div className='main-nav-links'>
                <Link className='main-nav-link' to='/'>
                  Generate Challenge
                </Link>
                <Link className='main-nav-link' to='/history'>
                  History
                </Link>
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
