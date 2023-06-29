import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../images/logo.svg'; 
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

const handleLogin = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful login
    })
    .catch((error) => {
      console.log(error);
      // Handle login error
    });
};

const Navbar = () => {
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
    <article>
      <div className="links-left">
        <div><Link to='/' className='Link'>Home</Link></div>
        <div><Link to='/Chat' className='Link'>Chat</Link></div>
        <div><Link to='/Profile' className='Link'>Profile</Link></div>
      </div>
            <div className='logo'><img src = {logo} alt = "logo here" ></img></div>

      <div className="links-right">

        {user ? (
          <>
          <div><h2>{user.displayName} </h2></div>
          <div><button onClick ={handleLogout} className='button-30' style={{backgroundColor:'yellow'}}>Logout</button></div></>
      ) : (
        <>
          <div><Link to='/' className='button-30' onClick={handleLogin}>Login</Link></div>
          <div><Link to='/Chat' className='button-30' style={{backgroundColor:'yellow'}}>Sign Up</Link></div>
          </>
      )}
      </div>
    </article>
  );
};

export default Navbar;
