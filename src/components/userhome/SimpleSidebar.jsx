/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IconButton, Box, CloseButton, Flex, Icon, useColorModeValue, Text, Drawer, DrawerContent } from '@chakra-ui/react';
import { FiSettings, FiMenu } from 'react-icons/fi';
import { RiDashboardFill } from "react-icons/ri";
import { IoIosBookmarks } from "react-icons/io";
import { MdScience } from "react-icons/md";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserDashboard from './UserDashboard';

const LinkItems = [
  { name: 'Dashboard', icon: <RiDashboardFill /> },
  { name: 'My Learning', icon: <IoIosBookmarks /> },
  { name: 'Projects', icon: <MdScience /> },
  { name: 'Settings', icon: <FiSettings /> },
];

export default function SimpleSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box minH = "100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60, width: "80%" }} p="4">

      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} borderRight="1px" borderRightColor={useColorModeValue('gray.200', 'gray.700')} w={{ base: 'full', md: 60 }} pos="" h="half" {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">Logo</Text> */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, index) => (
        <NavItem key={index} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box as="a" href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer" _hover={{ bg: 'cyan.400', color: 'white' }} {...rest}>
        {icon && (
          <Icon mr="4" fontSize="16" _groupHover={{ color: 'white' }} style={{ fontSize: '24px' }} >
            {icon}
          </Icon>
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex ml={{ base: 0, md: 60 }} px={{ base: 4, md: 24 }} height="20" alignItems="center" bg={useColorModeValue('white', 'gray.900')} borderBottomWidth="1px" borderBottomColor={useColorModeValue('gray.200', 'gray.700')} justifyContent="flex-start" {...rest}>
      <IconButton variant="outline" onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">Logo</Text>
    </Flex>
  );
};
