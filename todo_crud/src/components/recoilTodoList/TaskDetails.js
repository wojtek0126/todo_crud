/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import ButtonPrimary from '../atoms/ButtonPrimary';
import TaskDetailsWrapper from '../containers/TaskDetailsWrapper';
import { taskDetailsTaskNumberTxt,
         taskDetailsTaskContentTxt,
         taskDetailsStatusTxt,
         taskDetailsTimeStartedTxt,
         taskDetailsTimeUpdatedTxt,
         taskDetailsInProgressTxt,
         taskDetailsCompletedTxt  
} from '../../content/contentEng';
import { hideDetailsBtnIcon } from '../../content/icons';
import DisplayDetailsText from '../atoms/DisplayDetailsText';
import TaskDetailBtnWrapper from '../containers/TaskDetailBtnWrapper';
import { buttonBackgroundType3, taskDetailsDetailBackground } from '../../styles/gradients';


const TaskDetails =({clickClose, displayIt = 'flex', taskData}) => {  
  let getTask = taskData;  


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
       <>
          <DisplayDetailsText headText={taskDetailsTaskNumberTxt} contentText={getTask.id} marginTop={1} marginBottom={1}
          backgroundColor={taskDetailsDetailBackground}/>       
          <DisplayDetailsText headText={taskDetailsTaskContentTxt} contentText={getTask.title} marginTop={2} marginBottom={2} 
          backgroundColor={taskDetailsDetailBackground}/>            
          <DisplayDetailsText headText={taskDetailsStatusTxt} contentText={completionText} marginTop={2} marginBottom={2}
          backgroundColor={taskDetailsDetailBackground}/>
          <DisplayDetailsText headText={taskDetailsTimeStartedTxt} contentText={getTask.created_at} marginTop={2} marginBottom={2}
          backgroundColor={taskDetailsDetailBackground} />            
          <DisplayDetailsText headText={taskDetailsTimeUpdatedTxt} contentText={getTask.updated_at} marginTop={2} marginBottom={2}
          backgroundColor={taskDetailsDetailBackground} />  
            <TaskDetailBtnWrapper contentArea={  
            <ButtonPrimary text={hideDetailsBtnIcon} backgroundColor={buttonBackgroundType3}
                           onClick={clickClose} marginTop={1} marginBottom={1}/>} />  
        </>                
      }/>    
    );
  }


  export default TaskDetails;