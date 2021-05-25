/** @jsxRuntime classic */
/** @jsx jsx */  
import {jsx, ThemeProvider, Container, Flex } from 'theme-ui';
import theme from '../../styles/themes/theme';
import Footer from '../molecules/Footer';
import TitleStats from './TitleStats';
import blackboard from "../../assets/b4769e3a52766f30e86b375391c84441.jpg";
import TitleText from '../atoms/TitleText';
import ThoughtBoard from './ThoughtBoard';


  function TitleScreen() {    

  
      return (
        <ThemeProvider theme={theme} >                
          <Container>             
          <Flex sx={{                        
            backgroundColor: 'boxBackground',
            color: 'text',
            border: '2px solid',  
            borderColor: 'boxBorder', 
            borderRadius: 4,
            fontSize: 4,
            margin: 3,       
            padding: 3,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}><TitleText text1={'The'} text2={`Eazzy`} text3={`Organizer`} marginBottom={2} />       
            </Flex>
            <TitleStats />
            <ThoughtBoard imageUrl={blackboard} />
            <Flex sx = {{   
             justifyContent: 'center',
             alignItems: 'flex-end'}}>            
                <Footer year={`2021`} brandName={`HFM Wojbaza`} />
            </Flex>         
          </Container>     
        </ThemeProvider>      
      );
    }
  
  
    export default TitleScreen;