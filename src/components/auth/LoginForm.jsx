/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, InputGroup, InputRightElement, Icon } from '@chakra-ui/react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import authService from '../../services/auth.service';
import ErrorMessage from '../notifications/ErrorMessage';

const LoginForm = () => {
  // Form state values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  // Error State
  const [error, setError] = useState('');
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestBody = { email, password };
      authService.login(requestBody)
        .then((response) => {
          setIsLoading(false);
          navigate('/');
      })
        .catch((error) => {
          setError(error.response.data.message);
          setIsLoading(false);
          setEmail('');
          setPassword('');
        })


  }
  return (
    <Flex width = "full" align = "center" justifyContent = "center">
      <Box p = {8} mt = {8} width={["100%", "80%", "60%", "40%"]} borderWidth={1} borderRadius={8} boxShadow = "lg">
        <Box textAlign = "center">
          <Heading>Login</Heading>
        </Box>
        <Box my = {4} textAlign = "left">
          <form onSubmit={handleLoginSubmit}>
            {/* Error notification */}
            {error && <ErrorMessage message = {error} />}

            {/* Email Field */}
            <FormControl isRequired mb = {4}>
              <FormLabel>Email</FormLabel>
              <Input
                type = "email"
                placeholder = "danielakusevi@gmail.com"
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
              />
            </FormControl>

            {/* Password Field */}
            <FormControl isRequired mb = {8} >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type = {showPassword ? "text" : "password"}
                  placeholder = "******"
                  onChange = {(e) => setPassword(e.target.value)}
                  value = {password}
                />
                <InputRightElement width = "3rem">
                  <Button h = "1.5rem" size = "sm" onClick = {handlePasswordVisibility}>
                    {showPassword ? <Icon as = {AiFillEyeInvisible} /> : <Icon as = {AiFillEye} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Submit button */}
            <Button
              width = "full"
              type = "submit"
              colorScheme = "teal"
              variant = "solid"
               _hover = {{bg: "white", border: "1px solid teal", color: "teal"}}
               isLoading = {isLoading}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

export default LoginForm;
