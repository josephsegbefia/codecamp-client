/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Flex, Box, Icon } from '@chakra-ui/react';


const MenuDrawerNavItem = ({ children, icon, gotoPage, page, active, pagePath }) => {

  return (
    <Box
      width = "100%"
      // as="a"
      // href="#"
      style={{ textDecoration: 'none', fontSize: "20px" }}
      _focus={{ boxShadow: 'none' }}
      onClick={() => gotoPage(page)}
    >
      <Flex
        backgroundColor={(page === pagePath) ? 'cyan.400' : ''}
        width = "full"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          // bg: 'cyan.400',
          color: 'teal.500',
        }}
      >
        <Icon
            mr="4"
            fontSize="20"
            _groupHover={{
              color: 'teal.500',
            }}
            as={icon}
          />
          {children}
      </Flex>
    </Box>
  )
}

export default MenuDrawerNavItem
