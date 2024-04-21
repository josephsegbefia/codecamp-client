/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/auth/LoginForm';
import Signup from './components/auth/Signup';


function App() {

  return (
    <Router>
      <Routes>
      <Route path = '/' element = {<Home />} />
        <Route path = '/auth/login' element = {<LoginForm />} />
        <Route path = '/auth/signup' element = {<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
