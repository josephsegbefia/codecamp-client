/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSearchParams, useNavigate  } from "react-router-dom";
import { Flex, Box, FormControl, FormLabel, Input, Button, HStack, InputGroup, InputRightElement,Icon } from "@chakra-ui/react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import InfoMessage from "../notifications/InfoMessage";
import SuccessMessage from "../notifications/SuccessMessage";
import ErrorMessage from "../notifications/ErrorMessage";
import authService from "../../services/auth.service";


const PasswordResetForm = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [success, setSuccess] = useState("");
  const[error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleRepeatPasswordVisibility = () => setShowRepeatPassword(!showRepeatPassword);


  const passwordResetToken = searchParams.get('passwordResetToken');
  const requestBody = {password, passwordResetToken};

  const handleLoginClick = () => {
    navigate('/auth/login');
  }

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if(password !== repeatPassword){
      setError("Set matching passwords!");
      return;
    }

    authService.passwordReset(requestBody)
      .then((response) => {
        setIsLoading(false);
        setSuccess(response.data.message);
      })
      .catch((error) => {
        setError(error.response.data.message)
      })
  }

  return (
    <Flex width = "full" align = "center" justifyContent = "center" mt = "8rem" my = "10rem">
      <Box p = {8} mt = {8} width={["100%", "80%", "60%", "40%"]} borderWidth={1} borderRadius={8} boxShadow = "lg">
        {error && <ErrorMessage message = {error} />}
        {
          success && (
            <Box>
              <SuccessMessage message = {success} />
              <Button type = "button" colorScheme = "teal" onClick={handleLoginClick}>Login here</Button>
            </Box>
          )
        }
        {
          !error && !success && (
            <Box>
              <Box textAlign = "center">
                <InfoMessage mb={8} message = {`Make sure the passwords match. Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter. `} />
              </Box>
              <Box my = {4} textAlign = "left">
                <form onSubmit={handleResetPassword}>
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

                  <Button
                    mt={5}
                    width = "full"
                    type = "submit"
                    colorScheme = "teal"
                    variant = "solid"
                    _hover = {{bg: "white", border: "1px solid teal", color: "teal"}}
                    isLoading = {isLoading}
                  >
                    Reset Password
                  </Button>
                </form>
              </Box>
            </Box>
          )
        }
      </Box>
    </Flex>
  )
}

export default PasswordResetForm
