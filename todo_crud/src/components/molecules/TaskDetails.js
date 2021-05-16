/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { Flex, jsx, ThemeProvider } from 'theme-ui';
import { getSingleTask } from '../../API/fetch';
import theme from '../../styles/theme';
import BigText from '../atoms/BigText';
import ButtonPrimary from '../atoms/ButtonPrimary';
import MediumText from '../atoms/MediumText';
import SmallText from '../atoms/SmallText';

const TaskDetails = () => {
    const [task, setTask] = useState([]);
    const idfromstorage = localStorage.getItem(`taskId`);

    useEffect(() => {
        getSingleTask(`todos`, idfromstorage, setTask);   
        // window.localStorage.clear();  
    }, [])

    console.log(task, "task w taskdetails");

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
    <Flex sx={{flexDirection: 'column'}}>
      <BigText text={`task name: ${task.name}`} color={`text`} />
      <MediumText text={`task decription: ${task.description}`} color={`muted`} />  
      <MediumText text={`notes: ${task.notes}`} color={`muted`} />  
      <MediumText text={`status: ${task.status}`} color={`muted`} />  
    </Flex>  
    
    <Flex sx={{flexDirection: 'column'}}>     
       <ButtonPrimary text={`edit task`} to={`/edit`} color={`primary`} />
       <ButtonPrimary text={`delete task`} to={`/details`} color={`primary`} />       
       <ButtonPrimary text={`back to menu`} to={`/home`} color={`primary`} />
    </Flex>    
  </div>
    </ThemeProvider>
); }

export default TaskDetails;