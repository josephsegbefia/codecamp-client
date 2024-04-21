/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Box, FormControl, FormLabel, Input, Button, HStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"
import InfoMessage from "../notifications/InfoMessage";
import authService from "../../services/auth.service";
import SuccessMessage from "../notifications/SuccessMessage";
import ErrorMessage from "../notifications/ErrorMessage";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();

  const requestBody = { email };

  const handleCancel = () => {
    navigate('/auth/login');
  }

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    authService.passwordResetEmail(requestBody)
      .then((response) => {
        success(response.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
  }

  return (
    <Flex width = "full" align = "center" justifyContent = "center" mt = "10rem">
      <Box p = {8} mt = {8} width={["100%", "80%", "60%", "40%"]} borderWidth={1} borderRadius={8} boxShadow = "lg">
        <Box textAlign = "center">
          {
            success && (
              <SuccessMessage message = {success} />
            )
          }

          {
            error && (
              <ErrorMessage message = {error} />
            )
          }
          {
            !success && !error && (
              <Box>
                <InfoMessage message = "Please provide your email"/>
                <form onSubmit={handleSendEmail}>
                  {/* Email Field */}
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
                  <Box width = "50%">
                    <Button
                      mt={5}
                      width = "full"
                      type = "submit"
                      colorScheme = "teal"
                      variant = "solid"
                      _hover = {{bg: "white", border: "1px solid teal", color: "teal"}}
                      isLoading = {isLoading}
                    >
                      Send
                    </Button>
                    </Box>
                    <Box width = "50%">
                      <Button
                        mt={5}
                        width = "full"
                        type = "button"
                        colorScheme = "red"
                        variant = "solid"
                        _hover = {{bg: "white", border: "1px solid red", color: "red"}}
                        onClick = {handleCancel}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </HStack>

                </form>
              </Box>
            )
          }

        </Box>
      </Box>

    </Flex>
  )
}

export default ForgotPasswordForm
