import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProviderWrapper } from "./context/auth.context";
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthProviderWrapper>
  </React.StrictMode>,
)
