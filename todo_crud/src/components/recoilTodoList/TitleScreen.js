/** @jsxRuntime classic */
/** @jsx jsx */  
// import { useState, useEffect } from 'react';
import {jsx, ThemeProvider, Container, Flex } from 'theme-ui';
import theme from '../../styles/themes/theme';
import Banner from '../atoms/Banner';
import BigText from '../atoms/BigText';
import Footer from '../atoms/Footer';
import TitleStats from './TitleStats';
import blackboard from "../../assets/b4769e3a52766f30e86b375391c84441.jpg";

    
  function TitleScreen() {   
    const boardNotes = localStorage.getItem(`notes`);
    console.log(boardNotes, "boardnotes");
    // useEffect(() => {
    //     setNotes(localStorage.getItem(`notes`));
    //     console.log(notes);
    //   }, [notes])
  
      return (
        <ThemeProvider theme={theme} >                
          <Container >             
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
          }}><BigText text={' The Todo list'} marginBottom={2} />       
            </Flex>
            <TitleStats />
            <Banner imageUrl={blackboard} 
            value={boardNotes} />
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