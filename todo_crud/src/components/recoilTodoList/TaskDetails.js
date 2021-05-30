/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import ButtonPrimary from '../atoms/ButtonPrimary';
import TaskDetailsWrapper from '../containers/TaskDetailsWrapper';
import { taskDetailsTaskNumberTxt,
  taskDetailsTaskContentTxt,
  taskDetailsStatusTxt,
  taskDetailsTimeStartedTxt,
  taskDetailsTimeUpdatedTxt,
  taskDetailsInProgressTxt,
  taskDetailsCloseBtnTxt,
  taskDetailsCompletedTxt
} from '../../content/contentEng';
import DisplayDetailsText from '../atoms/DisplayDetailsText';
import TaskDetailBtnWrapper from '../containers/TaskDetailBtnWrapper';


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
        <Flex sx={{flexDirection: 'column'}}>    
          <DisplayDetailsText headText={taskDetailsTaskNumberTxt} contentText={getTask.id} marginTop={1} marginBottom={1}
          backgroundColor={'taskDetailContentBackground'}/>       
          <DisplayDetailsText headText={taskDetailsTaskContentTxt} contentText={getTask.title} marginTop={2} marginBottom={2} 
          backgroundColor={'taskDetailContentBackground'}/>            
          <DisplayDetailsText headText={taskDetailsStatusTxt} contentText={completionText} marginTop={2} marginBottom={2}
          backgroundColor={'taskDetailContentBackground'}/>
          <DisplayDetailsText headText={taskDetailsTimeStartedTxt} contentText={getTask.created_at} marginTop={2} marginBottom={2}
          backgroundColor={'taskDetailContentBackground'} />            
          <DisplayDetailsText headText={taskDetailsTimeUpdatedTxt} contentText={getTask.updated_at} marginTop={2} marginBottom={2}
          backgroundColor={'taskDetailContentBackground'} />  
            <TaskDetailBtnWrapper contentArea={  
            <ButtonPrimary text={taskDetailsCloseBtnTxt} backgroundColor={'buttons3'}
                           onClick={clickClose} marginTop={1} marginBottom={1}/>} />          
        </Flex>         
      }/>    
    );
  }


  export default TaskDetails;