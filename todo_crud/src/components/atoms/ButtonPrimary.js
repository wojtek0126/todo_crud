/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';


const ButtonPrimary = ({text, backgroundColor, onClick, type, id, displayIt}) => (
    <div >
        <button type={type} onClick={onClick} id={id}
            sx={{
            backgroundColor: `${backgroundColor}`,
            borderRadius: '4px',
            border: 'none',
            color: 'buttonText',
            display: 'inline-block',
            fontFamily: 'heading',
            fontSize: [0, 1],
            fontWeight: 'bold',
            marginBottom: 1,
            marginTop: 2,
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
   
);


export default ButtonPrimary;


    