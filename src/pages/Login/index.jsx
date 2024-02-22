import React, { useState } from 'react';
import { auth } from '../../firebase/fire-config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const signedInUser = result.user;
      setUser(signedInUser);
      console.log('Google Sign-In Successful:', signedInUser.email);
    } catch (error) {
      console.error('Google Sign-In Failed:', error.message);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log('Google Sign-Out Successful');
    } catch (error) {
      console.error('Google Sign-Out Failed:', error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleGoogleSignOut}>Sign out</button>
        </div>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleAuth;
