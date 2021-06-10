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

const TitleScreen = () => {
  const inputLength = useRecoilValue(inputLengthState)

  // dynamic character count
  console.log(inputLength, 'dynamic character count')

  return (
    <ThemeProvider theme={theme}>
      <Container>
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
