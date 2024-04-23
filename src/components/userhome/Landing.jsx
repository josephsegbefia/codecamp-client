/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import MenuDrawer from './MenuDrawer';
import { Flex, Box, VStack, Container} from '@chakra-ui/react';

const Landing = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('footer');


    const handleScroll = () => {
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setIsFooterVisible(footerTop > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex width = "full" height="120vh">
      <Box width = "25%" ml = "50px" position={!isFooterVisible ? 'absolute' : 'fixed'} top="5rem" left="0" overflowY="auto" bottom={isFooterVisible ? 'auto' : '5rem'}>
        <MenuDrawer />
      </Box>
      <Box height = "100vh">

      </Box>
    </Flex>
  )
}

export default Landing
