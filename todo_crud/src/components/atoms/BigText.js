/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const BigText = ({ text, color, marginBottom, backgroundColor }) => (
  <h2
    sx={{
      backgroundColor: `${backgroundColor}`,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: `${color}`,
      fontSize: [3, 4, 5],
      margin: 0,
      marginBottom: `${marginBottom}`,
    }}
  >
    {text}
  </h2>
)

export default BigText
