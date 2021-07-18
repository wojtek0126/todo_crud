/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { detailsBorderRadius } from '../../styles/themes/settings'

const DisplayDetailsText = ({
  headText,
  contentText,
  marginTop,
  marginBottom,
  backgroundColor,
  displayIt
}) => (
  <div
    sx={{
      display: `${displayIt}`,
      wordBreak: 'break-word',
      alignSelf: `center`,
      flexDirection: 'column',
      marginTop: `${marginTop}`,
      marginBottom: `${marginBottom}`,
      textAlign: 'center',
      //backgroundColor: `${backgroundColor}`,
      background: `${backgroundColor}`,
      width: '100%',
      padding: 2,
      border: '2px solid',
      borderColor: 'taskDetailBorderColor',
      borderRadius: detailsBorderRadius,
      fontSize: [1, 4],
    }}
  >
    <span sx={{ fontWeight: 'heading' }}>{headText}</span>
    {contentText}
  </div>
)

export default DisplayDetailsText
