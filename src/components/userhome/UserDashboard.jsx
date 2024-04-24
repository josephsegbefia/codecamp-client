// import React from 'react'
import { Flex, Text, Box, Stack, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import CourseCard from "./CourseCard";
const UserDashboard = () => {
  return (
    <Flex width = "90%" height = "90vh" >
      <Stack width = "full">
        <Text fontSize={'25px'} fontWeight={'bold'} fontFamily={'monaco'}>Continue learning...</Text>
        <Box mb = {5}>
          <CourseCard path = "Course" name = "Learn JavaScript" lesson = "JavaScript 101"/>
        </Box>
        <Button width = "30%" border={"none"} backgroundColor={"papayawhip"} _hover = {{bg: "teal.400", color: "white"}}>View all your learning <ChevronRightIcon /></Button>
      </Stack>
    </Flex>
  )
}

export default UserDashboard;
