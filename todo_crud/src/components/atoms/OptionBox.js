/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Label, Select } from 'theme-ui'

const OptionBox = ({onChange, options, value, height, width,
   backgroundColor, textColor, labelText, labelColor, fs1, fs2, fs3}) => (  
  <Flex>
    <Label sx={{flexDirection: `column`,
                   fontFamily: 'heading',
                   fontWeight: 'heading',
                   color: `${labelColor}`,
                   fontSize: [`${fs1}, ${fs2}, ${fs3}`],
                   margin: 0,
              }}>{labelText}
        <Select onChange={onChange} value={value}       
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
          {options.map(el => (
          <option key={el}  value={`${el}`}>{el}</option>
        ))}        
        </Select> 
      </Label>
  </Flex> 
);

export default OptionBox;


    