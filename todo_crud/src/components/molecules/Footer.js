/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'

const Footer = ({ brandName, year }) => {
  return (
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
        borderRadius: '4px',
        border: `2px solid`,
        borderColor: `boxBorder`,
        // backgroundColor: 'boxBackground'
        background: `${taskBackground}`,
      }}
    >
      <div
        sx={{
          fontFamily: 'heading',
          fontWeight: 'body',
          color: `text`,
        }}
      >
        © {year} {brandName}
      </div>
    </Flex>
  )
}

export default Footer
