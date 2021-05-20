/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Label, Textarea } from 'theme-ui'


const TextArea = ({value, cols, placeholder, height, width, backgroundColor,
     textColor, labelText, labelColor, fs1, fs2, fs3, onChange, id, display}) => (
    <Flex id={id} sx={{display: `${display}`}}>
        <Label sx={{flexDirection: `column`, 
        fontFamily: 'heading',
        fontWeight: 'heading',
        color: `${labelColor}`,
        fontSize: [`${fs1}, ${fs2}, ${fs3}`],
        margin: 0,
}}>{labelText}
            <Textarea value={value} onChange={onChange}
            cols={cols} placeholder={placeholder}
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
                // textTransform: 'uppercase',
                '&:hover, &:focus': { backgroundColor: 'foreground' },
            }}
            >    
            </Textarea> 
        </Label>
    </Flex>  
);


export default TextArea;


    