/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'react-router-dom'

const ButtonPrimary = ({text, backgroundColor, onClick, type, id, display}) => (
    <div >
        <button type={type} onClick={onClick} id={id}
            sx={{
            backgroundColor: `${backgroundColor}`,
            borderRadius: '100em',
            color: 'foreground',
            display: 'inline-block',
            fontFamily: 'heading',
            fontSize: [0, 1],
            fontWeight: 'bold',
            marginBottom: 1,
            px: 3, // shorthand for defining padding-left and padding-right
            py: 2, // shorthand for defining padding-top and padding-bottom
            textDecoration: 'none',
            textTransform: 'uppercase',
            display: `${display}`,
        
            '&:hover, &:focus': { backgroundColor: 'secondary' },
         }}
        >
            {text}
        </button>
    </div> 
   
);

export default ButtonPrimary;


    