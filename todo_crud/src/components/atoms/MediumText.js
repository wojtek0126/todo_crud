/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const MediumText = ({
  text,
  color,
  marginBottom,
  marginTop,
  display,
  alignSelf,
}) => (
  <div
    sx={{
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [1, 2],
      color: `${color}`,
      marginBottom: `${marginBottom}`,
      marginTop: `${marginTop}`,
      display: `${display}`,
      alignSelf: `${alignSelf}`,
    }}
  >
    {text}
  </div>
)

export default MediumText
