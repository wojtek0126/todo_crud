/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Link, ThemeProvider } from 'theme-ui';
import theme from '../../styles/theme';
import ButtonPrimary from '../atoms/ButtonPrimary';

const TaskDetails = () => (
    <ThemeProvider theme={theme}>
<div
    sx={{
      background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
      backgroundColor: 'foreground',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
    <h2
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [3, 4, 5],
        margin: 0,
      }}
    >
      task name
    </h2>
    <div
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [1, 2],
        color: 'muted',
        marginBottom: 2,
      }}
    >
      task description
    </div>   
    <div
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [1, 2],
        color: 'muted',
        marginBottom: 2,
      }}
    >
      notes
    </div> 
    <div
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [1, 2],
        color: 'muted',
        marginBottom: 2,
      }}
    >
      status
    </div> 
    <Flex sx={{flexDirection: 'column'}}>
        <Link to="/add" >          
        <ButtonPrimary text={`edit`} />         
        </Link> 
        <ButtonPrimary text={`change status`} />  
        <Link to="/home" >          
        <ButtonPrimary text={`delete`} />   
        </Link>  <Link to="/home" >          
        <ButtonPrimary text={`back to menu`} />   
        </Link> 
    </Flex>    
  </div>
    </ThemeProvider>
);

export default TaskDetails;