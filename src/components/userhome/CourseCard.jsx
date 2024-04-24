/* eslint-disable react/prop-types */
// import React from 'react';
import { Card, CardBody, CardHeader, Text, Button, Stack } from '@chakra-ui/react'


const CourseCard = ({ path, name, lesson }) => {
  return (
    <Card width = "full">
      <CardHeader>
        <Text>{path}</Text>
        <Text fontWeight={"bold"}>{name}</Text>
      </CardHeader>
      <CardBody>
        <Text>Current Lesson: {lesson}</Text>
        <Stack direction = "row" my = {3}>
          <Button variant={"outline"} colorScheme = "white" style = {{border:"3px solid teal"}} _hover = {{bg: "teal.400", color: "white"}}> View syllabus </Button>
          <Button variant = {"outline"} colorScheme = "white" style = {{border:"3px solid teal"}} _hover = {{bg: "teal.400", color: "white"}}> Continue learning</Button>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default CourseCard
