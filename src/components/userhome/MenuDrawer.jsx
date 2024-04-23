/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import {
 Flex, Box, VStack
} from '@chakra-ui/react';
import MenuDrawerContent from './MenuDrawerContent';

const MenuDrawer = () => {

  return (
    <Flex width = "full" align = "center" justifyContent = "center" style ={{border: "2px solid green"}}>
      <MenuDrawerContent />
    </Flex>
  )
}

export default MenuDrawer
