/** @jsxRuntime classic */
/** @jsx jsx */  
import { alignItems } from 'styled-system';
import {jsx, ThemeProvider, Container, Flex, Box } from 'theme-ui';
import theme from '../../styles/theme';  
import BigText from '../atoms/BigText';
import TitleStats from './TitleStats';
  
  
  function TitleScreen() {   
  
      return (
        <ThemeProvider theme={theme} >                
          <Container >             
          <Flex         sx={{
            // background: 'box',     
            // backgroundColor: 'box',
            border: '2px solid black',   
            borderRadius: 4,
            fontSize: 4,
            margin: 3,
            padding: 3,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}><BigText text={' The Todo list'} marginBottom={2} />       
            </Flex>
            <TitleStats />
          </Container>     
        </ThemeProvider>      
      );
    }
  
  
    export default TitleScreen;