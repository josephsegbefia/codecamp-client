/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, AlertIcon, AlertDescription, Alert } from '@chakra-ui/react';

const ErrorMessage = ({ message }) => {
  return (
    <Box my = {4}>
      <Alert status = "error" borderRadius = {4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  )
}

export default ErrorMessage
