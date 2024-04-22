/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WithSubnavigation from './Nav.jsx';
import Home from './components/Home';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import VerifyEmail from './components/auth/VerifyEmail';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import PasswordResetForm from './components/auth/PasswordResetForm';


function App() {

  return (
    <Router>
      <header>
        <WithSubnavigation />
      </header>
      <Routes>
      <Route path = '/' element = {<Home />} />
        <Route path = '/auth/login' element = {<LoginForm />} />
        <Route path = '/auth/signup' element = {<SignupForm />} />
        <Route path = '/auth/verify-email' element={<VerifyEmail />} />
        <Route path = '/auth/forgot-password' element = {<ForgotPasswordForm />} />
        <Route path = '/auth/password-reset' element = {<PasswordResetForm />}/>
      </Routes>
    </Router>
  )
}

export default App;
