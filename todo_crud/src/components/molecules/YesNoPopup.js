/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import {
  buttonBackgroundType1,
  buttonBackgroundType3,
} from '../../styles/gradients'
import ButtonPrimary from '../atoms/ButtonPrimary'
import MediumText from '../atoms/MediumText'

const YesNoPopup = ({
  onClickYes,
  onClickNo,
  messageText,
  yesText,
  noText,
}) => (
  <Flex
    sx={{
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%',
      '@media screen and (max-width: 700px)': {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}
  >
    <ButtonPrimary
      text={yesText}
      onClick={onClickYes}
      backgroundColor={buttonBackgroundType1}
    />
    <MediumText
      marginBottom={2}
      marginTop={2}
      text={messageText}
      display={'flex'}
      alignSelf={'center'}
    />
    <ButtonPrimary
      text={noText}
      onClick={onClickNo}
      backgroundColor={buttonBackgroundType3}
    />
  </Flex>
)

export default YesNoPopup
