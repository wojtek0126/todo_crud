/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, Input, jsx, Label } from 'theme-ui';


const SearchField = ({type, placeholder, value, labelText, onChange, id}) => (  
  <Flex>
    <Label sx={{flexDirection: `column`,
                   fontFamily: 'heading',
                   fontWeight: 'heading',                   
                   fontSize: [`12, 14, 16`],
                   margin: 0,
              }}>{labelText}
        <Input id={id} value={value} onChange={onChange}
          type={type} placeholder={placeholder}
          sx={{
            backgroundColor: `searchFilterBackground`,
            borderRadius: '4px',
            border: '2px solid',
            borderColor: 'inputBorder',    
            color: `searchText`,
            display: 'inline-block',
            fontFamily: 'heading',
            fontSize: [1, 2],
            fontWeight: 'bold',
            marginBottom: 1,
            px: 3, // shorthand for defining padding-left and padding-right
            py: 2, // shorthand for defining padding-top and padding-bottom
            textDecoration: 'none',
            // textTransform: 'uppercase',
            '&:hover, &:focus': {backgroundColor: `searchFilterBackground`,
                                 border: '2px solid',
                                 borderColor: 'inputBorderFocus',            
                                 outline: 'none !important'},
            '&::placeholder' : {color: 'placeHolderText'}
          }}
        >    
        </Input> 
      </Label>
  </Flex> 
);


export default SearchField;


    