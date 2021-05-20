/** @jsxRuntime classic */
/** @jsx jsx */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jsx } from 'theme-ui'


const SearchIcon = ({color}) => (    
    <FontAwesomeIcon icon={faSearch}  sx={{
        backgroundColor: 'primary',
        borderRadius: '100em',
        color: `${color}`,
        height: 'auto',
        // border: '1px solid black',
        display: 'inline-block',
        fontFamily: 'heading',
        fontSize: [0, 1],
        fontWeight: 'bold',
        marginBottom: 1,
        px: 3, // shorthand for defining padding-left and padding-right
        py: 2, // shorthand for defining padding-top and padding-bottom
        textDecoration: 'none',
        textTransform: 'uppercase',
        '&:hover, &:focus': { backgroundColor: 'secondary' },
      }} />      
);


export default SearchIcon;


    