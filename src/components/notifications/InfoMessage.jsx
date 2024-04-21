/* eslint-disable react/prop-types */
import { Box, AlertIcon, AlertDescription, Alert } from '@chakra-ui/react';

const InfoMessage = ({ message }) => {
  return (
    <Box my = {4}>
      <Alert status = "info" borderRadius = {4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  )
}

export default InfoMessage;
