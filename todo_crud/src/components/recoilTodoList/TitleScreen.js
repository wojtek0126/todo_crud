/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui'
import Footer from '../molecules/Footer'
import TitleStats from './TitleStats'
import blackboard from '../../assets/b4769e3a52766f30e86b375391c84441.jpg'
import TitleText from '../atoms/TitleText'
import ThoughtBoard from './ThoughtBoard'
import {
  titlePart1Txt,
  titlePart2Txt,
  titlePart3Txt,
  footerYearTxt,
  footerBrandnameTxt,
} from '../../content/contentEng'
import { inputLengthState } from '../../functions/recoil'
import { useRecoilValue } from 'recoil'
import theme from '../../styles/themes/theme'
import TitleWrapper from '../containers/TitleWrapper'
import FooterWrapper from '../containers/FooterWrapper'
import background from "../../assets/1035.png";
import alien1 from "../../assets/alien1.gif";
import zombie from "../../assets/zombie.gif";
import monkey from "../../assets/monkey.gif";
import rocket from "../../assets/rocket.gif";



import Sky from 'react-sky';

const TitleScreen = () => {
  const inputLength = useRecoilValue(inputLengthState)

  // dynamic character count
  console.log(inputLength, 'dynamic character count')

  return (
    <ThemeProvider theme={theme}>
       <Container sx={{
                      // backgroundImage: `url(${background})`,
                      background: 'boxBackground',
                      backgroundSize: 'cover',
                      paddingTop: '20px'
                      }}> 
                       <Sky 
          images={{
            /* FORMAT AS FOLLOWS */           
            0: alien1, 
            1: zombie,
            2: monkey,
            3: rocket
            /* 4: your other image.. */
            /* 5: your other image.. */
            /* ... */
          }}
          how={130} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={40} /* time of the animation. Dfaults at 20s */
          size={'100px'} /* size of the rendered images. Defaults at 150px */
          background={'transparent'} /* color of background. Defaults to none */
        />          
        <TitleWrapper
          contentArea={
            <TitleText
              text1={titlePart1Txt}
              text2={titlePart2Txt}
              text3={titlePart3Txt}
              marginBottom={2}
            />
          }
        />
        <ThoughtBoard imageUrl={blackboard} />
        <TitleStats />
        <FooterWrapper
          contentArea={
            <Footer year={footerYearTxt} brandName={footerBrandnameTxt} />
          }
        />
      </Container>
    </ThemeProvider>
  )
}

export default TitleScreen
