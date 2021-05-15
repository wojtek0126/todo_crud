/** @jsxRuntime classic */
/** @jsx jsx */
import { Input, jsx } from 'theme-ui'

const InputField = ({type, placeholder, height, width, backgroundColor, textColor}) => (
    <Input
    type={type} placeholder={placeholder}
    sx={{
      backgroundColor: `${backgroundColor}`,
      borderRadius: '100em',
      height: `${height}`,
      width: `${width}`,
      color: `${textColor}`,
      display: 'inline-block',
      fontFamily: 'heading',
      fontSize: [0, 1],
      fontWeight: 'bold',
      marginBottom: 1,
      px: 3, // shorthand for defining padding-left and padding-right
      py: 2, // shorthand for defining padding-top and padding-bottom
      textDecoration: 'none',
      textTransform: 'uppercase',
      '&:hover, &:focus': { backgroundColor: 'foreground' },
    }}
  >    
  </Input>  
);

export default InputField;


    