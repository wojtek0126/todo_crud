/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { taskDetailsBackground } from '../../styles/gradients'
import { generalBorderRadius, borders } from '../../styles/themes/settings'
import background2 from "../../assets/bubbles4.jpg";


const TaskDetailsWrapper = ({ contentArea, displayIt = 'flex', height = 0, padding }) => (
  <div
    sx={{
      // display: `${displayIt}`,
      display: `flex`,
      height: `${height}`,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundImage: `url(${background2})`,
      backgroundSize: 'cover',
      // background: `${taskDetailsBackground}`,
      color: 'text',
      border: `none`,
      borderColor: 'boxBorder',
      borderRadius: generalBorderRadius,
      fontFamily: 'body',
      fontSize: 4,
      margin: 3,
      padding: `${padding}`,
      paddingLeft: 3,
      paddingRight: 3,
      transition: '0.5s',
      maxHeight: '100%'
    }}
  >
    <Flex sx={{ flexDirection: 'column' }}>{contentArea}</Flex>
  </div>
)

export default TaskDetailsWrapper
