/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, ThemeProvider } from 'theme-ui';
import theme from '../../styles/theme';
import ButtonPrimary from '../atoms/ButtonPrimary';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';

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
   <InputField placeholder={`name your task`} color={`text`} labelText={'Task name'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`} />
   <InputField placeholder={`describe your task`} color={`text`} labelText={'Task description'} />   
   <TextArea color={`text`} labelText={'your task details'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`} />   
    <Flex sx={{flexDirection: 'column'}}>        
    <ButtonPrimary text={`save`} to={`/add`} color={`primary`}/>  
    <ButtonPrimary text={`back to menu`} to={`/home`} color={`primary`}/>  
    </Flex>   
  </div>
    </ThemeProvider>
);

export default AddTask;