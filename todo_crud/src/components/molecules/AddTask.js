/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Link, ThemeProvider } from 'theme-ui';
import theme from '../../styles/theme';
import ButtonPrimary from '../atoms/ButtonPrimary';

const AddTask = () => (
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
    <Flex sx={{flexDirection: 'column'}}>        
    <ButtonPrimary text={`add new task`} to={`/add`} color={`primary`}/>  
    <ButtonPrimary text={`back to main board`} to={`/home`} color={`primary`}/>  
    </Flex>   
  </div>
    </ThemeProvider>
);

export default AddTask;