/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import { generalBorderRadius } from '../../styles/themes/settings'

const FooterWrapper = ({ contentArea }) => (
  <Flex
    sx={{
      justifyContent: 'center',
      alignItems: 'flex-end',
    }}
  >
       <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        fontSize: 4,
        textAlign: 'center',
        margin: 3,
        padding: '9px',
        borderRadius: generalBorderRadius,
        border: `2px solid`,
        borderColor: `boxBorder`,
        backgroundColor: 'boxBackground'
        // background: `${taskBackground}`,
      }}
    >
      {contentArea}
    </Flex>
  </Flex>
)

export default FooterWrapper
