/** @jsxRuntime classic */
/** @jsx jsx */  
import {jsx, ThemeProvider, Container, Flex } from 'theme-ui';
import theme, { titleBackground } from '../../styles/themes/theme';
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
import { inputLengthState } from '../../functions/recoil';
import { useRecoilValue } from 'recoil';


  const TitleScreen = () => {  
    const inputLength = useRecoilValue(inputLengthState);
    
    //dynamic character count
    console.log(inputLength, "dynamic character count");
    

      return (
        <ThemeProvider theme={theme} >                
          <Container>             
          <Flex sx={{                        
            background: `${titleBackground}`,
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
            <ThoughtBoard imageUrl={blackboard} />
            <TitleStats />            
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