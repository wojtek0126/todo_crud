/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, ThemeProvider } from 'theme-ui';
import theme from '../../styles/theme';
import ButtonPrimary from '../atoms/ButtonPrimary';
import InputField from '../atoms/InputField';
import OptionBox from '../atoms/OptionBox';
import TextArea from '../atoms/TextArea';

const EditTask = () => (
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
   <InputField placeholder={`update name of your task`} color={`text`} labelText={'New task name'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`} />
   <InputField placeholder={`update task description`} color={`text`} labelText={'New task description'} />   
   <TextArea color={`text`} labelText={'Update task notes'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`} />  
   <OptionBox color={`text`} defaultValue={'to do'} labelText={`Update status`} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`} />  
    <Flex sx={{flexDirection: 'column'}}>        
    <ButtonPrimary text={`save`} to={`/details`} color={`primary`}/>  
    <ButtonPrimary text={`back to menu`} to={`/home`} color={`primary`}/>  
    </Flex>   
  </div>
    </ThemeProvider>
);

export default EditTask;