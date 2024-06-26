/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import authService from "../services/auth.service";





const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState(null);





  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  }

  const authenticateUser = () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers

      authService.verify()
        .then((response) => {
          // If the server verifies that JWT token is valid
          const user = response.data;
        // Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
      })
        .catch((error) => {
          // If the server sends an error response (invalid token)
          // Update state variables
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
      });

    } else {
      // If the token is not available
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  }

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
  }

  const updateUser = useCallback((response) => {
    localStorage.setItem('user', JSON.stringify(response));
    setUser(response);
  })

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  }


  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    authenticateUser();
  }, []);

  // console.log(user);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, updateUser, storeToken, authenticateUser, logOutUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
