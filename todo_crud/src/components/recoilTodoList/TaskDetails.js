/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import ButtonPrimary from '../atoms/ButtonPrimary';
import TaskDetailsWrapper from '../containers/TaskDetailsWrapper';


const TaskDetails =({clickClose, displayIt = 'flex', taskData}) => {  
  let getTask = taskData;

  //text to content.js
  const taskDetailsCloseBtnTxt = "Close";
  const taskDetailsCompletedTxt = "Task completed";
  const taskDetailsInProgressTxt = "Task in progress";

  //convert task completion status from true/false to success/in progress text
  let completionText = "";  
  if (getTask.completed === true) {
    completionText = taskDetailsCompletedTxt; 
    }
  else {
    completionText = taskDetailsInProgressTxt;
    }  
    
  
    return (
      <TaskDetailsWrapper displayIt={displayIt} contentArea={
        <Flex sx={{flexDirection: 'column'}}>                
          <Flex>Task number: {getTask.id}</Flex>           
          <Flex>Task content:</Flex>
          <Flex>{getTask.title}</Flex>
          <Flex>Status: {completionText}</Flex>
          <Flex>Time started: {getTask.created_at}</Flex>
          <Flex>Last time updated: {getTask.updated_at}</Flex>  
          <Flex sx={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ButtonPrimary text={taskDetailsCloseBtnTxt} backgroundColor={'buttons3'} onClick={clickClose} />
          </Flex>          
        </Flex> 
      }/>    
    );
  }


  export default TaskDetails;