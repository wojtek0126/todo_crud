/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'
import { generalBorderRadius, borders } from '../../styles/themes/settings'

const ThoughtBoardWrapper = ({ contentArea }) => (
  <Flex
    sx={{
      maxWidth: '100vw',
      flexDirection: 'column',
      background: 'box',
      backgroundColor: 'boxBackground',
      // background: `${taskBackground}`,
      color: 'text',
      border: `${borders}`,
      borderColor: 'boxBorder',
      borderRadius: generalBorderRadius,
      fontSize: 4,
      margin: 3,
      padding: 3,
      marginBottom: 0,
    }}
  >
    {contentArea}
  </Flex>
)

export default ThoughtBoardWrapper
