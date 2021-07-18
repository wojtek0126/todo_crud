/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'
import { generalBorderRadius, borders, boxOpacity } from '../../styles/themes/settings'
import background3 from "../../assets/poly4.webp";


const ThoughtBoardWrapper = ({ contentArea }) => (
  <Flex
    sx={{
      maxWidth: '100vw',
      flexDirection: 'column',
      backgroundImage: `url(${background3})`,
      backgroundSize: 'cover',
      // background: 'box',
      // backgroundColor: 'boxBackground',
      // background: `${taskBackground}`,
      opacity: `${boxOpacity}`,
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
