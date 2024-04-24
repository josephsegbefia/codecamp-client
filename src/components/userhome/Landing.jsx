/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';
import { Flex, Box, Stack, Container, Heading, HStack} from '@chakra-ui/react';
import UserDashboard from './UserDashboard';
import UserLearning from './UserLearning';
import UserProjects from './UserProjects';
import SuccessMessage from '../notifications/SuccessMessage';
import Settings from './Settings';

const Landing = ({ signInMessage }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const navigate = useNavigate();



  useEffect(() => {
    const footer = document.getElementById('footer');
    const menuDrawer = document.getElementById("menu-drawer")
    const menuBottom = menuDrawer.getBoundingClientRect().bottom;

    const handleScroll = () => {
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setIsFooterVisible(footerTop > menuBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gotoPage = (page) => {
    setSearchParams({page: page});
  }


  return (
    <Flex width = "full" height = "100vh" fontFamily={'monaco'} backgroundColor={'papayawhip'}>

      <Box p = {8} mt = {8} width = "100%">
        <Flex width = "full" justifyContent = "center" >
          <Box width={"40%"}>
            {
            signInMessage && (<SuccessMessage message = {signInMessage} />)
            }
          </Box>

        </Flex>
        <Box my = {4} textAlign = "left">
            <HStack width = "100%" spacing={4}>
              <Box
                width = "25%"
                ml = "2rem"
                // position={!isFooterVisible ? 'absolute' : 'fixed'}
                // top="5rem" left="0"
                // overflowY="hidden"
                // bottom={isFooterVisible ? 'auto' : '5rem'}
              >
                <MenuDrawer gotoPage = {gotoPage} pagePath = {page}/>
              </Box>
             <Box width = "80%"
                // position = "relative"
                // left = "500px"
                // overflow="hidden"
                // zIndex={-1}
                ml = "5px"
              >

              {page === 'dashboard' && (<UserDashboard />)}
              {page === 'learning' && (<UserLearning />)}
              {page === 'projects' && (<UserProjects />)}
              {page === 'settings' && <Settings />}
             </Box>
            </HStack>
        </Box>
      </Box>
    </Flex>
  );

}

export default Landing
