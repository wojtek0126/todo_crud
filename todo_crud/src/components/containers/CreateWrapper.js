/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'
import { generalBorderRadius, borders } from '../../styles/themes/settings'
import background3 from "../../assets/poly4.webp";


const CreateWrapper = ({ contentArea }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      background: 'box',
      // backgroundColor: 'boxBackground',
      backgroundImage: `url(${background3})`,
      backgroundSize: 'cover',
      // background: `${taskBackground}`,
      color: 'text',
      border: `${borders}`,
      borderColor: 'boxBorder',
      borderRadius: generalBorderRadius,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
    {contentArea}
  </Flex>
)

export default CreateWrapper
