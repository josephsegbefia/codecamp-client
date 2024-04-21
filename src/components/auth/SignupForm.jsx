/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Flex, Text, Box, Heading, FormControl, FormLabel, Input, Button, InputGroup, InputRightElement, Icon, HStack } from '@chakra-ui/react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import authService from '../../services/auth.service';
import ErrorMessage from '../notifications/ErrorMessage';
import SuccessMessage from '../notifications/SuccessMessage';



const SignupForm = () => {
  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  // Error & success State
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleRepeatPasswordVisibility = () => setShowRepeatPassword(!showRepeatPassword);

  const handleSignup = (e) => {
    e.preventDefault();
    if(password !== repeatPassword){
      setError("Please set matching password");
      return;
    }

    setIsLoading(true);
    const requestBody = {firstName, lastName, email, password};
    authService.signup(requestBody)
      .then((response) => {
        setIsLoading(false);
        setSuccess("Please verify your account. A verification email has been sent to your email");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setFirstName("");
        setLastName("")
        setShowPassword(false);
        setShowRepeatPassword(false);

        // navigate('/auth/login');
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data.message);
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setFirstName("");
        setLastName("")
        setShowPassword(false);
        setShowRepeatPassword(false);
      })
  }


  return (
    <Flex width = "full" align = "center" justifyContent = "center" mt = "8rem">
      <Box p = {8} mt = {8} width={["100%", "80%", "60%", "50%"]} borderWidth={1} borderRadius={8} boxShadow = "lg">
        <Box textAlign = "center">
          <Heading mb={8}>Sign Up</Heading>
        </Box>
        <Box my = {4} textAlign = "left">
          <form onSubmit={handleSignup}>

            {error && <ErrorMessage message = {error} />}
            {success && <SuccessMessage message = {success} />}
            <HStack>
              <FormControl isRequired mb = {4}>
                <FormLabel>First Name</FormLabel>
                <Input
                  type = "text"
                  placeholder = ""
                  onChange = {(e) => setFirstName(e.target.value)}
                  value = {firstName}
                />
              </FormControl>

              <FormControl isRequired mb = {4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type = "text"
                  placeholder = ""
                  onChange = {(e) => setLastName(e.target.value)}
                  value = {lastName}
                />
              </FormControl>
            </HStack>

            <FormControl isRequired mb = {4}>
              <FormLabel>Email</FormLabel>
              <Input
                type = "email"
                placeholder = ""
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
              />
            </FormControl>

            <HStack>
              <FormControl isRequired mb = {4}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type = {showPassword ? "text" : "password"}
                    placeholder = ""
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

              <FormControl isRequired mb = {4}>
                <FormLabel>Confirm</FormLabel>
                <InputGroup>
                  <Input
                    type = {showRepeatPassword ? "text" : "password"}
                    placeholder = ""
                    onChange = {(e) => setRepeatPassword(e.target.value)}
                    value = {repeatPassword}
                  />
                  <InputRightElement width = "3rem">
                    <Button h = "1.5rem" size = "sm" onClick = {handleRepeatPasswordVisibility}>
                      {showRepeatPassword ? <Icon as = {AiFillEyeInvisible} /> : <Icon as = {AiFillEye} />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </HStack>
            <Text>Already have an account? &nbsp;
              <Link to={"/auth/login"} style={{color: "teal"}}>Login</Link>
            </Text>
            <Button
              mt={5}
              width = "full"
              type = "submit"
              colorScheme = "teal"
              variant = "solid"
               _hover = {{bg: "white", border: "1px solid teal", color: "teal"}}
               isLoading = {isLoading}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

export default SignupForm
