/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'

const CreateWrapper = ({ contentArea }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      background: 'box',
      // backgroundColor: 'boxBackground',
      background: `${taskBackground}`,
      color: 'text',
      border: '2px solid',
      borderColor: 'boxBorder',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
    {contentArea}
  </Flex>
)

export default CreateWrapper
