/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Label, Textarea } from 'theme-ui';


const TextArea = ({value, cols, placeholder, 
     labelText, onChange, id}) => (
    <Flex id={id}>
        <Label sx={{flexDirection: `column`, 
        fontFamily: 'heading',
        fontWeight: 'heading',              
        fontSize: [`12, 14, 16`],
        margin: 0,
}}>{labelText}
            <Textarea value={value} onChange={onChange}
            cols={cols} placeholder={placeholder}
            sx={{
                backgroundColor: `inputBackground`,
                border: '2px solid',
                borderColor: 'inputBorder',
                borderRadius: '4px',               
                color: `text`,
                display: 'inline-block',
                fontFamily: 'heading',
                fontSize: [0, 1],
                fontWeight: '400 !important',                
                marginBottom: 2,
                px: 3, // shorthand for defining padding-left and padding-right
                py: 2, // shorthand for defining padding-top and padding-bottom
                textDecoration: 'none',
                // textTransform: 'uppercase',
                ' &:focus': { backgroundColor: 'foreground',
                 border: '2px solid',
                 borderColor: 'borderFocus',
                 outline: 'none !important'
                },
                '&::placeholder' : {color: 'placeHolderText'}
            }}
            >    
            </Textarea> 
        </Label>
    </Flex>  
);


export default TextArea;


    