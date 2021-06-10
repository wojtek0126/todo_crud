/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const ButtonsWrapper = ({ contentArea, displayStyle, alignSelf }) => (
  <div
    sx={{
      display: `${displayStyle}`,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: `${alignSelf}`,
      width: '100% !important',
      '@media screen and (max-width: 700px)': {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}
  >
    {contentArea}
  </div>
)

export default ButtonsWrapper
