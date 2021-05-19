
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import SearchField from 'react-search-field';

const SearchBox = ({onChange, height, width,
  backgroundColor, textColor, focusColor,
  fs1, fs2, fs3,}) => (
    <SearchField  onChange={onChange} placeholder='Search item'
    sx={{
      backgroundColor: `${backgroundColor}`,
      borderRadius: '100em',
      height: `${height}`,
      width: `${width}`,
      color: `${textColor}`,
      display: 'inline-block',
      fontFamily: 'heading',
      fontSize: [`${fs1}, ${fs2}, ${fs3}`],
      fontWeight: 'bold',
      marginBottom: 1,
      px: 3, // shorthand for defining padding-left and padding-right
      py: 2, // shorthand for defining padding-top and padding-bottom
      textDecoration: 'none',
      textTransform: 'uppercase',
      '&:hover, &:focus': { backgroundColor: `${focusColor}`} }}      
    />
);

export default SearchBox;


    