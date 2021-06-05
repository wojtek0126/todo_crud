/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Label, Textarea } from 'theme-ui';
// import blackboard from "../../assets/b4769e3a52766f30e86b375391c84441.jpg";


const TextArea = ({value, cols, placeholder, 
     labelText, onChange, onBlur, disabled, textareaBorderColor = 'inputBorder', textareaBorderFocusColor}) => (
    <Flex>
        <Label sx={{flexDirection: `column`, 
        fontFamily: 'heading',
        fontWeight: 'heading',              
        fontSize: [`16, 18, 20`],
        margin: 0,
}}>{labelText}
            <Textarea value={value} onChange={onChange}
            cols={cols} placeholder={placeholder} disabled={disabled} onBlur={onBlur}
            sx={{
                // backgroundImage: `url(${blackboard})`,
                backgroundColor: `inputBackground`,
                border: '2px solid',
                borderColor: `${textareaBorderColor}`,
                borderRadius: '4px',               
                color: `textWhite`,
                display: 'inline-block',
                fontFamily: 'blackboard',
                fontSize: [2, 3],
                fontWeight: '400 !important',                
                marginBottom: 2,
                maxWidth: '100%',
                px: 3, // shorthand for defining padding-left and padding-right
                py: 2, // shorthand for defining padding-top and padding-bottom
                textDecoration: 'none',
                // textTransform: 'uppercase',
                '&:hover, &:focus': {
                // backgroundImage: `url(${blackboard})`,
                backgroundColor: `inputBackground`,
                border: '2px solid',
                borderColor: `${textareaBorderFocusColor}`,            
                outline: 'none !important'},
                '&::placeholder' : {color: 'placeHolderText'}
            }}
            >    
            </Textarea> 
        </Label>
    </Flex>  
);


export default TextArea;


    