/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'
import { generalBorderRadius } from '../../styles/themes/settings'

const TitleWrapper = ({ contentArea }) => (
  <Flex
    sx={{
      backgroundColor: 'boxBackground',
      // background: `${taskBackground}`,
      color: 'text',
      border: '2px solid',
      borderColor: 'boxBorder',
      borderRadius: generalBorderRadius,
      fontSize: 4,
      margin: 3,
      padding: 3,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {contentArea}
  </Flex>
)

export default TitleWrapper
