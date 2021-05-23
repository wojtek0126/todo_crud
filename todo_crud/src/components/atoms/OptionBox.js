/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Label, Select } from 'theme-ui';


const OptionBox = ({onChange, options, value, labelText}) => (  
  <Flex>
    <Label sx={{flexDirection: `column`,
                   fontFamily: 'heading',
                   fontWeight: 'heading',                   
                   fontSize: [`12, 14, 16`],
                   margin: 0,
              }}>{labelText}
        <Select onChange={onChange} value={value}       
            sx={{
              backgroundColor: `optionBoxBackground`,
              borderRadius: '4px',
              border: '2px solid',
              borderColor: 'inputBorder',             
              color: `optionBoxText`,
              display: 'inline-block',
              fontFamily: 'heading',
              fontSize: [0, 1],
              fontWeight: 'bold',
              marginBottom: 1,
              px: 3, // shorthand for defining padding-left and padding-right
              py: 2, // shorthand for defining padding-top and padding-bottom
              textDecoration: 'none',
              // textTransform: 'uppercase',
              '&:hover, &:focus': { backgroundColor: 'foreground',
              border: '2px solid',
              borderColor: 'inputBorderFocus',
              outline: 'none !important' },
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


    