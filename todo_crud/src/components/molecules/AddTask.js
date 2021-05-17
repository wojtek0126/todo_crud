/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react'
import { Flex, jsx, ThemeProvider } from 'theme-ui';
import { addTask } from '../../API/fetch';
import taskData from '../../API/objectData';
import { createNewTask } from '../../functions/handlers';
import theme from '../../styles/theme';
import ButtonPrimary from '../atoms/ButtonPrimary';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';
// import createNewTask from '/../functions/handlers.js';
import TaskDetails from './TaskDetails';

const AddTask = () => { 
    const [taskName, setTaskName] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [taskNotes, setTaskNotes] = useState("");      
  
         //initial task data to save
    const task = {
        name: taskName,
        description: taskDetails,
        notes: taskNotes,
        status: "to do"       
    }   
    console.log(task)     


 

return (
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
   <InputField placeholder={`name your task`} color={`text`} labelText={'Task name'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`} 
   onChange={e => setTaskName(e.target.value)} />
   <InputField placeholder={`describe your task`} color={`text`} labelText={'Task description'} 
   onChange={e => setTaskDetails(e.target.value)}/>   
   <TextArea color={`text`} labelText={'your task details'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`} 
   onChange={e => setTaskNotes(e.target.value)}/>   
    <Flex sx={{flexDirection: 'column'}}>        
    <ButtonPrimary text={`save`} to={`/home`} color={`primary`} type={`submit`} onClick={() => addTask(`todos`, task)}/>  
    <ButtonPrimary text={`back to menu`} to={`/home`} color={`primary`}/>  
    </Flex>   
  </div>
    </ThemeProvider>
);}


export default AddTask;