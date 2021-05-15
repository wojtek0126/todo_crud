/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Input } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../atoms/ButtonPrimary'
import ProgressCounter from '../atoms/ProgressCounter'


const Title = () => (
  <Flex
    sx={{
      flexDirection: 'column',
      background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
      backgroundColor: 'foreground',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
    <h1
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [3, 4, 5],
        margin: 0,
        textTransform: 'uppercase',
        display: 'flex',
        alignSelf: 'center',
        paddingBottom: '10px'
      }}
    >
      todo list
    </h1>     
    <Flex sx={{
      flexDirection: 'row',    
    }}>
       <Input
      type="text" defaultValue="search"
      sx={{
        backgroundColor: 'foreground',
        borderRadius: '100em',
        color: 'text',
        display: 'inline-block',
        fontFamily: 'heading',
        fontSize: [0, 1],
        fontWeight: 'bold',
        marginBottom: 1,
        px: 3, // shorthand for defining padding-left and padding-right
        py: 2, // shorthand for defining padding-top and padding-bottom
        textDecoration: 'none',
        textTransform: 'uppercase',
        '&:hover, &:focus': { backgroundColor: 'foreground' },
      }}
    >    
    </Input>  
        <FontAwesomeIcon icon={faSearch}  sx={{
        backgroundColor: 'primary',
        borderRadius: '100em',
        color: 'foreground',
        height: 'auto',
        border: '1px solid black',
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
    </Flex>  
    <Flex sx={{justifyContent: 'space-between'}}>
    <Flex sx={{flexDirection: 'column'}}>
     <ProgressCounter text={`in progress`} color={`progress`} counter={`234`} />
      <div        
        sx={{
          border: '1px solid black',
          backgroundColor: 'done',
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
        }}
      > completed: 45678
      </div>
      <ButtonPrimary text={`add new task`} to={`/add`} />  
      </Flex>       
    </Flex>   
  </Flex>
);

export default Title;