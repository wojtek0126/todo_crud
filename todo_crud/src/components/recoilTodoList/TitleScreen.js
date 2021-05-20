/** @jsxRuntime classic */
/** @jsx jsx */  
import {jsx, ThemeProvider, Container, Flex, Box } from 'theme-ui';
import theme from '../../styles/theme';  
import BigText from '../atoms/BigText';
import TitleStats from './TitleStats';
  
  
  function TitleScreen() {   
  
      return (
        <ThemeProvider theme={theme} >       
          <Container >             
          <Flex         sx={{
            background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
            backgroundColor: 'foreground',
            borderRadius: 4,
            fontSize: 4,
            margin: 3,
            padding: 3,
            flexDirection: 'column'
          }}><BigText text={' The Todo list'} marginBottom={2} />       
            </Flex>
            <TitleStats />
          </Container>     
        </ThemeProvider>      
      );
    }
  
  
    export default TitleScreen;