/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { taskDetailsBackground } from '../../styles/gradients'
import { generalBorderRadius, borders } from '../../styles/themes/settings'

const TaskDetailsWrapper = ({ contentArea, displayIt = 'flex', height = 0 }) => (
  <div
    sx={{
      // display: `${displayIt}`,
      display: `flex`,
      height: `${height}`,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      background: `${taskDetailsBackground}`,
      color: 'text',
      border: `${borders}`,
      borderColor: 'boxBorder',
      borderRadius: generalBorderRadius,
      fontFamily: 'body',
      fontSize: 4,
      margin: 3,
      padding: 3,
      transition: '1s'
    }}
  >
    <Flex sx={{ flexDirection: 'column' }}>{contentArea}</Flex>
  </div>
)

export default TaskDetailsWrapper
