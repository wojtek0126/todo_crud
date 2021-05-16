/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { getAllTasks } from '../../API/fetch'
import BigText from '../atoms/BigText'
import ButtonPrimary from '../atoms/ButtonPrimary'
import MediumText from '../atoms/MediumText'


const Task = ({id, taskName, taskDescription, status}) => {
//   const [tasksArr, setTasksArr] = useState([]);
//   const [taskId, setTaskId] = useState([]);

//   useEffect(() => {
//     getAllTasks(setTasksArr);
// },[])

  const handleContinue = (id) => {
    // tasksArr.map((el) => {
    //     setTaskId(id)
    console.log(id, "ideeee")
    localStorage.setItem(`taskId`, id);        
    }  

  

    return (
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
  <BigText text={taskName} color={`text`} />  
  <MediumText text={taskDescription} color={`muted`} /> 
  <MediumText text={status} color={`text`} />  
   <ButtonPrimary onClick={() => handleContinue(id)} text={`show details`} to={`/details`} color={`primary`}/>
  </div>
);
  
  }
  



export default Task;