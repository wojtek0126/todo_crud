/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { buttonsBorderRadius } from '../../styles/themes/settings'

const ButtonPrimary = ({
  heigth,
  text,
  backgroundColor,
  onClick,
  type,
  id,
  displayIt,
  color = 'buttonText2',
  alignSelf = 'center',
}) => (
  <div>
    <button
      type={type}
      onClick={onClick}
      id={id}
      sx={{
        wordBreak: 'break-word',
        alignSelf: `${alignSelf}`,
        // backgroundColor: `${backgroundColor}`,
        background: `${backgroundColor}`,
        height: `${heigth}`,
        transition: '0.5s',
        borderRadius: buttonsBorderRadius,
        border: 'none',
        color: `${color}`,
        display: 'flex !important',
        fontFamily: 'heading',
        fontSize: [0, 1],
        fontWeight: 'bold',
        marginBottom: 1,
        marginTop: 2,
        marginRight: 2,
        cursor: 'pointer',
        px: 3, // shorthand for defining padding-left and padding-right
        py: 2, // shorthand for defining padding-top and padding-bottom
        textDecoration: 'none',
        textTransform: 'uppercase',
        display: `${displayIt}`,
        // '&:hover, &:focus': { backgroundColor: 'buttonsClicked' },
      }}
    >
      {text}
    </button>
  </div>
)

export default ButtonPrimary
