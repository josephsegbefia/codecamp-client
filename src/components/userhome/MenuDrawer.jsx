/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import {
 Flex, Box, VStack
} from '@chakra-ui/react';
import MenuDrawerContent from './MenuDrawerContent';

const MenuDrawer = ({ gotoPage }) => {

  return (
    <Flex width = "full" id = "menu-drawer" height = "90vh" justifyContent = "center">
      <MenuDrawerContent gotoPage = { gotoPage }/>
    </Flex>
  )
}

export default MenuDrawer
