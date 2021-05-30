/** @jsxRuntime classic */
/** @jsx jsx */  
import {jsx, ThemeProvider, Container, Flex } from 'theme-ui';
import theme from '../../styles/themes/theme';
import Footer from '../molecules/Footer';
import TitleStats from './TitleStats';
import blackboard from "../../assets/b4769e3a52766f30e86b375391c84441.jpg";
import TitleText from '../atoms/TitleText';
import ThoughtBoard from './ThoughtBoard';
import { titlePart1Txt,
         titlePart2Txt,
         titlePart3Txt,
         footerYearTxt,
         footerBrandnameTxt,  
} from '../../content/contentEng';


  function TitleScreen() {  
  
  
      return (
        <ThemeProvider theme={theme} >                
          <Container>             
          <Flex sx={{                        
            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,65,0.6699813714548319) 100%)',
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
          }}><TitleText text1={titlePart1Txt} text2={titlePart2Txt} text3={titlePart3Txt} marginBottom={2} />       
            </Flex>
            <TitleStats />
            <ThoughtBoard imageUrl={blackboard} />
            <Flex sx = {{   
             justifyContent: 'center',
             alignItems: 'flex-end'}}>            
                <Footer year={footerYearTxt} brandName={footerBrandnameTxt} />
            </Flex>         
          </Container>     
        </ThemeProvider>      
      );
    }
  
  
    export default TitleScreen;