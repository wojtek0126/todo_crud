/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, Input, jsx, Label } from 'theme-ui'

const InputField = ({type, placeholder, defaultValue, height, width, backgroundColor, textColor, labelText, labelColor, fs1, fs2, fs3, onChange}) => (  
  <Flex>
    <Label sx={{flexDirection: `column`,
                   fontFamily: 'heading',
                   fontWeight: 'heading',
                   color: `${labelColor}`,
                   fontSize: [`${fs1}, ${fs2}, ${fs3}`],
                   margin: 0,
              }}>{labelText}
        <Input defaultValue={defaultValue} onChange={onChange}
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
      </Label>
  </Flex> 
);

export default InputField;


    