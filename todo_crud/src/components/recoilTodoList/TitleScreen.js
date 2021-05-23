/** @jsxRuntime classic */
/** @jsx jsx */  
import {jsx, ThemeProvider, Container, Flex } from 'theme-ui';
import theme from '../../styles/themes/theme';
import Banner from '../atoms/Banner';
import BigText from '../atoms/BigText';
import Footer from '../atoms/Footer';
import TitleStats from './TitleStats';
  
  
  function TitleScreen() {   
  
      return (
        <ThemeProvider theme={theme} >                
          <Container >             
          <Flex         sx={{
            // background: 'box',     
            // backgroundColor: 'box',
            border: '2px solid boxBorder',   
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
            <Flex sx = {{position: 'relative',
             height: '40vh',
             justifyContent: 'center',
             alignItems: 'flex-end'}}>
            
                <Footer year={`2021`} brandName={`HFM Wojbaza`} />
            </Flex>         
          </Container>     
        </ThemeProvider>      
      );
    }
  
  
    export default TitleScreen;