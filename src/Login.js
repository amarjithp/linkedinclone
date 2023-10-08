import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
        dispatch(
            login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilUrl: userAuth.user.photoURL,
            })
        );
    }).catch(error => alert(error));

  };
  
  const signup = () => {
    if(!name) {
        return alert("enter a name!");
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic,
        })
        .then(() => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                })
            );
        })
    }).catch(error => alert(error));  

  };
  

  return (
    <div className='login'>
        <img src="https://grandnode.com/content/images/thumbs/5e4ba92f0857aa408cf9d866_login-with-linkedin_850.png" alt="" />

        <form action="">
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder='Full Name (required if registering)' 
              type="text" 
            />
            <input 
              value={profilePic} 
              onChange={(e) => setProfilePic(e.target.value)} 
              placeholder='Profile pic URL (optional)' 
              type="text" 
            />
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Email' 
              type="text" 
            />
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Password' 
              type="password" 
            />

            <button type='submit' onClick={loginToApp}>Log In</button>
        </form>
    
        <p>Don't have an account already?{" "}
            <span className='login__signup' onClick={signup}>Sign Up</span>
        </p>
    </div>
  );
}
export default Login