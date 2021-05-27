/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react';
import { Flex, jsx } from 'theme-ui';
import { getSingleTask } from '../../API/fetch';
import ButtonPrimary from '../atoms/ButtonPrimary';


const TaskDetails =({taskId, clickClose, displayIt = 'flex'}) => {  
  const [getTask, setGetTask] = useState([]);
console.log(taskId, "task id w item details");
  useEffect(() => {
    getSingleTask(taskId, setGetTask);
    
  }, [])
  console.log(getTask, "task cały w details z usestata")
    let completionText = "";  

    if (getTask.completion === true) {
      completionText = "Task completed"; 
      }
    else {
      completionText = "Task in progress"
    }  
    
  
    return (
        <div
        sx={{
          display: `${displayIt}`,
          alignItems: 'center', 
          justifyContent: 'center',
          alignSelf: 'center',
          background: 'box',     
          backgroundColor: 'boxBackground',
          color: 'text',
          border: '2px solid', 
          borderColor: 'boxBorder',  
          borderRadius: 4,
          fontSize: 4,
          margin: 3,
          padding: 3,
        }}
      >
           <Flex sx={{flexDirection: 'column'}}>                
            <Flex>Task number: {getTask.id}</Flex>           
            <Flex>Task content:</Flex>
            <Flex>{getTask.title}</Flex>
            <Flex>Status: {completionText}</Flex>
            <Flex>Time started: {getTask.created_at}</Flex>
            <Flex>Last time updated: {getTask.updated_at}</Flex>  
            <Flex sx={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* <ButtonPrimary text={'print'} backgroundColor={'buttons1'} /> */}
          <ButtonPrimary text={'close'} backgroundColor={'buttons3'} onClick={clickClose} />
        </Flex>       
        </Flex>
        
      </div>
    );
  }


  export default TaskDetails;