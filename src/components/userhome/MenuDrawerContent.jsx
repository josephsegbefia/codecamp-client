/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, VStack, Flex} from '@chakra-ui/react'
import MenuDrawerNavItem from './MenuDrawerNavItem';
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosBookmarks } from "react-icons/io";
import { LuPuzzle } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";


const DrawerMenuItems = [
  { name: "Dashboard", page: "dashboard", icon: MdSpaceDashboard },
  { name: "My Learning", page: "learning", icon: IoIosBookmarks},
  { name: "Projects", page: "projects", icon: LuPuzzle },
  { name: "Settings", page: "settings", icon: IoMdSettings },
]
const MenuDrawerContent = ({ gotoPage }) => {
  return (
    <Flex width = "full">
      <VStack width = "full">
        {
          DrawerMenuItems.map((item, index) => (
            <MenuDrawerNavItem icon = {item.icon} key = {index} page = {item.page} gotoPage = {gotoPage}>{item.name}</MenuDrawerNavItem>
          ))
        }
      </VStack>
    </Flex>
  )
}

export default MenuDrawerContent
