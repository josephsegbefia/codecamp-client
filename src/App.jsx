/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import VerifyEmail from './components/auth/VerifyEmail';


function App() {

  return (
    <Router>
      <Routes>
      <Route path = '/' element = {<Home />} />
        <Route path = '/auth/login' element = {<LoginForm />} />
        <Route path = '/auth/signup' element = {<SignupForm />} />
        <Route path = '/auth/verify-email' element={<VerifyEmail />} />
      </Routes>
    </Router>
  )
}

export default App;
