/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { Flex, jsx, ThemeProvider } from 'theme-ui';
import { getSingleTask, updateTask } from '../../API/fetch';
import theme from '../../styles/theme';
import ButtonPrimary from '../atoms/ButtonPrimary';
import InputField from '../atoms/InputField';
import OptionBox from '../atoms/OptionBox';
import TextArea from '../atoms/TextArea';

const EditTask = () => {
    const [task, setTask] = useState([]);
    const idfromstorage = localStorage.getItem(`taskId`);
    const [taskName, setTaskName] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [taskNotes, setTaskNotes] = useState("");  
    const [taskStatus, setTaskStatus] = useState("");      
  
   //options for select box
   const options = ["to do", "in progress", "done"];   
    
  //initial task data 
    const taskInit = {
       name: task.name,
       description: task.description,
       notes: task.notes,
     status: task.status       
    }  
    console.log(taskInit, "init dejta")  
   
    //new task data     
    const taskUpdate = {
        name: taskName,
        description: taskDetails,
        notes: taskNotes,
        status: taskStatus       
    }   
    console.log(taskUpdate, "upadejt dejta")   

    useEffect(() => {
        getSingleTask(`todos`, idfromstorage, setTask);  
        setTaskStatus(task.status)  
          
    }, []) 
    console.log(taskStatus, "status")    
    return  (
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
    <InputField defaultValue={task.name} color={`text`} labelText={'New task name'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`}
       onChange={e => setTaskName(e.target.value)} />
    <InputField defaultValue={task.description} color={`text`} labelText={'New task description'} 
    onChange={e => setTaskDetails(e.target.value)}/>   
    <TextArea defaultValue={task.notes}color={`text`} labelText={'Update task notes'} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`}
       onChange={e => setTaskNotes(e.target.value)} />  
    <OptionBox options={options} color={`text`} value={`${task.status}`} labelText={`Update status`} labelColor={`text`} fs1={`3`} fs2={`4`} fs3={`5`}
       onChange={e => setTaskStatus(e.target.value)} />  
        <Flex sx={{flexDirection: 'column'}}>        
        <ButtonPrimary onClick={() => updateTask(`todos`, task.id, taskUpdate)} text={`save`} to={`/details`} color={`primary`}/>  
        <ButtonPrimary text={`back to menu`} to={`/home`} color={`primary`}/>  
        </Flex>   
    </div>
        </ThemeProvider>
);
}

export default EditTask;