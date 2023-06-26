import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import React, { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyD94UGCjiEIHE-6FY0RUpZ8L1f8PS5WKwA",
  authDomain: "sigma-1bf2f.firebaseapp.com",
  projectId: "sigma-1bf2f",
  storageBucket: "sigma-1bf2f.appspot.com",
  messagingSenderId: "547019121414",
  appId: "1:547019121414:web:a8c15f31cd5d89a7a9b487",
  measurementId: "G-TXYXFCGHCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const authInstance = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authInstance.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogin = () => {
    authInstance.(provider)
      .then((result) => {
        // Login successful
        setUser(result.user);
      })
      .catch((error) => {
        // Error occurred during login
        console.log(error);
      });
  };

  
  const handleLogout = () => {
    authInstance.signOut()
      .then(() => {
        // Logout successful
        setUser(null);
      })
      .catch((error) => {
        // Error occurred during logout
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please sign in</h1>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default App;


