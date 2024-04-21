/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Flex, Spinner, Box, Button } from '@chakra-ui/react';
import authService from '../../services/auth.service';
import SuccessMessage from '../notifications/SuccessMessage';
import ErrorMessage from '../notifications/ErrorMessage';

const VerifyEmail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const emailToken = searchParams.get('emailToken');
  const [success, setSuccess] = useState("");
  const [error,setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const requestBody = {emailToken};

  const navigate = useNavigate();

  const runVerification = () => {
    setIsLoading(true);
    authService.verifyEmail(requestBody)
      .then((response) => {
        setSuccess("Email Verified. Please login to continue");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
        setIsLoading(false);
      })
  }

  const handleLoginClick = () => {
    navigate('/auth/login');
  }
  useEffect(() => {
    runVerification()
  }, []);


  return (
    <Flex width = "full" align = "center" justifyContent = "center" mt = "10rem">
      <Box p = {8} mt = {8} width={["100%", "80%", "60%", "40%"]} textAlign = "center">
        {
          isLoading && (
            <Spinner color = "teal.500" size = "xl" />
          )
        }
        {
          success && (
            <Box>
              <SuccessMessage message = {success} />
              <Button type = "button" colorScheme = "teal" onClick={handleLoginClick}>Login here</Button>
            </Box>
          )
        }
        {
          error && (
            <Box>
              <ErrorMessage message = {error} />
            </Box>
          )
        }
      </Box>
    </Flex>
  )
}

export default VerifyEmail
