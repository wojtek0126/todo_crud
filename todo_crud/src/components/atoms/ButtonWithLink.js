/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'react-router-dom';


const ButtonWithlink = ({to, text, backgroundColor, onClick, type}) => (
    <Link to={to} sx={{width: 'fit-content'}}>
        <button type={type} onClick={onClick} 
            sx={{
            backgroundColor: `${backgroundColor}`,
            borderRadius: '4px',
            border: 'none',
            color: 'buttonText',
            display: 'inline-block',
            fontFamily: 'heading',
            fontSize: [0, 1],
            fontWeight: 'bold',
            marginTop: 2,
            marginBottom: 1,

            cursor: 'pointer',
            px: 3, // shorthand for defining padding-left and padding-right
            py: 2, // shorthand for defining padding-top and padding-bottom
            textDecoration: 'none',
            textTransform: 'uppercase',        
            // '&:hover, &:focus': { backgroundColor: 'buttonsClicked' },
         }}
        >
            {text}
        </button>
    </Link> 
   
);


export default ButtonWithlink;


    