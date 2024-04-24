/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import '../src/assets/styles.scss'
import { Box, Text } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WithSubnavigation from './Nav.jsx';
import CallToActionWithAnnotation from './components/Home';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import VerifyEmail from './components/auth/VerifyEmail';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import PasswordResetForm from './components/auth/PasswordResetForm';
import LargeWithAppLinksAndSocial from './Footer.jsx';
import Landing from './components/userhome/Landing.jsx';


function App() {
  const [signInMessage, setSignInMessage] = useState("");

  useEffect(() => {
    // Set up the timer when the component mounts
    const signInMessageTimer = setTimeout(() => {
      setSignInMessage("");
    }, 4000);

    // Clear the timer when the component unmounts or when signInMessage changes
    return () => clearTimeout(signInMessageTimer);
  }, [signInMessage]);

  return (
    <div className = "page-wrapper">
      <Router>
      <header>
        <WithSubnavigation />
      </header>
      <Routes>
      <Route path = '/' element = {<CallToActionWithAnnotation />} />
        <Route path = '/auth/login' element = {<LoginForm setSignInMessage = {setSignInMessage} />} />
        <Route path = '/auth/signup' element = {<SignupForm />} />
        <Route path = '/auth/verify-email' element={<VerifyEmail />} />
        <Route path = '/auth/forgot-password' element = {<ForgotPasswordForm />} />
        <Route path = '/auth/password-reset' element = {<PasswordResetForm />}/>
        <Route path = '/learning' element = {<Landing signInMessage = {signInMessage}/>} />
        {/* <Route path = '/learning/dashboard' element = {<UserDashboard />}/> */}
      </Routes>
        <LargeWithAppLinksAndSocial />
    </Router>
    </div>

  )
}

export default App;
