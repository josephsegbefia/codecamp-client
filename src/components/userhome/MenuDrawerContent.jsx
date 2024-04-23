/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import MenuDrawerNavItem from './MenuDrawerNavItem';
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosBookmarks } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";


const DrawerMenuItems = [
  { name: "Dashboard", icon: MdSpaceDashboard },
  { name: "My Learning", icon: IoIosBookmarks},
  { name: "Projects", icon: GrProjects },
  { name: "Settings", icon: IoMdSettings }
]
const MenuDrawerContent = () => {
  return (
    <Box width = "full" style={{border: "3px solid red"}}>
      <VStack>
        {
          DrawerMenuItems.map((item, index) => (
            <MenuDrawerNavItem icon = {item.icon} key = {index}>{item.name}</MenuDrawerNavItem>
          ))
        }
      </VStack>
    </Box>
  )
}

export default MenuDrawerContent
