// import React from 'react'
import { Flex, Text, Box, Stack } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
const UserDashboard = () => {
  return (
    <Flex width = "90%" height = "90vh" >
      <Stack width = "full">
        <Text fontSize={'25px'} fontWeight={'bold'} fontFamily={'monaco'}>Continue learning...</Text>
        <Box>
          <CourseCard path = "Course" name = "Learn JavaScript" lesson = "JavaScript 101"/>
        </Box>
      </Stack>
    </Flex>
  )
}

export default UserDashboard;
