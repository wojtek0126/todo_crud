/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, ThemeProvider } from 'theme-ui';
import theme from '../../styles/theme';
import BigText from '../atoms/BigText';
import ButtonPrimary from '../atoms/ButtonPrimary';
import MediumText from '../atoms/MediumText';
import SmallText from '../atoms/SmallText';

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
    <Flex sx={{flexDirection: 'column'}}>
      <BigText text={`task name`} color={`text`} />
      <MediumText text={`task decription`} color={`muted`} />  
      <MediumText text={`notes`} color={`muted`} />  
      <MediumText text={`status`} color={`muted`} />  
    </Flex>  
    
    <Flex sx={{flexDirection: 'column'}}>     
       <ButtonPrimary text={`edit task`} to={`/edit`} color={`primary`} />
       <ButtonPrimary text={`delete task`} to={`/details`} color={`primary`} />       
       <ButtonPrimary text={`back to menu`} to={`/home`} color={`primary`} />
    </Flex>    
  </div>
    </ThemeProvider>
);

export default TaskDetails;