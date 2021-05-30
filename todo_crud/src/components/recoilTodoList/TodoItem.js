/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import { useRecoilState } from 'recoil';
import { useState, useEffect, useRef } from 'react';
import { todoItemState, todoListState } from '../../functions/recoil';
import ButtonPrimary from '../atoms/ButtonPrimary';
import CheckboxAtom from '../atoms/Checkbox';
import { deleteTask, getAllTasks, getSingleTask, updateTask } from '../../API/fetch';
import MediumText from '../atoms/MediumText';
import BigText from '../atoms/BigText';
import TextArea from '../atoms/TextArea';
import { switchBtnTxt, timeStampFormatted, toggleDisplay } from '../../functions/functionStorage';
import YesNoPopup from '../molecules/YesNoPopup';
import TaskDetails from './TaskDetails';
import ButtonsWrapper from '../containers/ButtonsWrapper';
import { updateText,
  updateEmptyText,  
  deleteText,
  yesText,
  noText, 
  statusYesNoMessage,
  editYesNoMessage,  
  deleteYesNoMessage,
  todoItemStatusInProgressText,
  todoItemStatusCompletedText, 
  todoItemChangeStatusBtnTxt,
  todoItemShowDetailsBtnTxt
} from '../../content/contentEng';


function TodoItem({item}) {


   //display toggle style setting
    const displayOn = 'flex';
    const displayOff = 'none';
  //sets equal delays for common timeouts
  const delayTime = 1800;

    const initialTitleDisplay = item.title;
    const todoItemPrevious = item;
    const [todoList, setTodoList] = useRecoilState(todoListState); 
    const [updateButtonText, setUpdateButtonText] = useState(updateText);
    const [deleteButtonText, setDeleteButtonText] = useState(deleteText);
    const [inputValue, setInputValue] = useState(''); 
    const [initTaskData, setInitTaskData] = useState(item);
    const [textareaDisplay, setTextareaDisplay] = useState(initialTitleDisplay); 
    // const [todo, setTodo] = useRecoilState(todoItemState);
    const [updatedData, setUpdatedData] = useState(todoItemPrevious);    
    const index = todoList.findIndex((listItem) => listItem === item);
    //toggle textarea enabled or disabled
    const [disabled, setDisabled] = useState(true);
    // buttons active or not
    const [taskBtnEdit, setTaskBtnEdit] = useState(displayOn); 
    const [taskBtnStatus, setTaskBtnStatus] = useState(displayOn); 
    const [taskBtnDelete, setTaskBtnDelete] = useState(displayOn);
    const [taskBtnDetails, setTaskBtnDetails] = useState(displayOn);      
    //yes no popups active or not
    const [yesNoEditPopup, setYesNoEditPopup] = useState(displayOff);  
    const [yesNoDeletePopup, setYesNoDeletePopup] = useState(displayOff);  
    const [yesNoStatusPopup, setYesNoStatusPopup] = useState(displayOff);  
    // const [yesNoEnterEditPopup, setYesNoEnterEditPopup] = useState(displayOff);  
    //views active or not
    const [taskDetailView, setTaskDetailView] = useState(displayOff);
    const [taskStatusView, setTaskStatusView] = useState(displayOn);
    
    useEffect(() => {
      const todoDataInit = {
        id: item.id,
        user_id: item.user_id,
        title: item.title,
        completed: item.completed,
        created_at: item.created_at,
        updated_at: item.updated_at
      }  
      setInitTaskData(todoDataInit)
    }, [])     

    //edit task, just changing content without commiting
    const editItemText = ({target: {value}}) => {  
  
      const todoDataMod = {
        id: item.id,
        user_id: item.user_id,
        title: value,
        completed: item.completed,
        created_at: item.created_at,
        updated_at: timeStampFormatted()
      }      
      //this makes target value update dynamically on textarea     
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        title: value,
        updated_at: timeStampFormatted()
      });
     
      setTextareaDisplay(todoDataMod.title);    
      setUpdatedData(todoDataMod);
      setInputValue(value);    
      setTodoList(newList);          
    };   

    //commit edit changes on click
    const confirmEditChanges = (todoDataMod) => {
      if (updatedData.title === "" || updatedData.title === null || updatedData.title === undefined) {
        setTaskBtnEdit(displayOn);
        setYesNoEditPopup(displayOff); 
        switchBtnTxt(setUpdateButtonText, updateText, updateEmptyText, delayTime);  
        setTimeout(() => {
          setTaskBtnEdit(displayOff);
          setYesNoEditPopup(displayOn); 
        }, delayTime);   
      } 
      else {
        updateTask(item.id, todoDataMod);   
        setInitTaskData(item); 
        // setTextareaDisplay(updatedData.title);             
         setTaskBtnEdit(displayOn);
       setTaskBtnDelete(displayOn);
       setTaskBtnDetails(displayOn); 
       setTaskBtnStatus(displayOn); 
       setYesNoEditPopup(displayOff);  
       setDisabled(true);                        
      }      
    }

    //update task comletion status
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        completed: !item.completed,
        updated_at: timeStampFormatted()
      });    
      const todoDataModCheck =    {
        id: item.id,
        user_id: item.user_id,        
        title: item.title,
        completed: !item.completed,
        created_at: item.created_at,
        updated_at: timeStampFormatted()
      }
      updateTask(item.id, todoDataModCheck); 
      setTodoList(newList); 
      setUpdatedData(todoDataModCheck);       
    };
  
    //delete item on click, assigned to 'yes' button
    const deleteItem = () => {       
        deleteTask(item.id);       
        const newList = removeItemAtIndex(todoList, index);   
        setTodoList(newList);             
       setYesNoDeletePopup(displayOff);
       setTaskBtnEdit(displayOn);
       setTaskBtnDelete(displayOn);
       setTaskBtnDetails(displayOn); 
       setTaskBtnStatus(displayOn); 
    };     

    //when details close button clicked
    const handleCloseDetailsBtn = () => {
      setTaskDetailView(displayOff);
      setTaskBtnEdit(displayOn);
      setTaskBtnDelete(displayOn);
      setTaskBtnDetails(displayOn); 
      setTaskBtnStatus(displayOn);  
      setTaskStatusView(displayOn);
    }

    //when update button clicked and updating enabled
    const handleUpdateBtn = () => {    //
      setTaskBtnEdit(displayOff);
      setTaskBtnDelete(displayOff);
      setTaskBtnDetails(displayOff);    
      setTaskBtnStatus(displayOff);  
      setYesNoEditPopup(displayOn);
      setDisabled(false);
    }     

    const handleUpdateNoBtn = () => {          
      setTaskBtnEdit(displayOn);
      setTaskBtnDelete(displayOn);
      setTaskBtnDetails(displayOn); 
      setTaskBtnStatus(displayOn);  
      setYesNoEditPopup(displayOff);
      setDisabled(true);
      setTextareaDisplay(initTaskData.title); 
    } 

    //when change status button clicked
    const handleChangeStatusBtn = () => {
      setTaskBtnEdit(displayOff);
      setTaskBtnDelete(displayOff);
      setTaskBtnDetails(displayOff); 
      setTaskBtnStatus(displayOff);
      setYesNoStatusPopup(displayOn);       
    }

      //when status changed and answer 'yes' to confirmation question
      const handleChoiceBoxConfirm = () => {
        toggleItemCompletion();
        setTaskBtnEdit(displayOn);
        setTaskBtnDelete(displayOn);
        setTaskBtnDetails(displayOn); 
        setTaskBtnStatus(displayOn);      
        setYesNoStatusPopup(displayOff); 
       }

      //when status changed and answer 'no' to confirmation question
      const handleChoiceBoxDeny = () => {        
        setTaskBtnEdit(displayOn);
        setTaskBtnDelete(displayOn);
        setTaskBtnDetails(displayOn); 
        setTaskBtnStatus(displayOn);      
        setYesNoStatusPopup(displayOff); 
       }

       //after clicking
       const handleShowDetailsBtn = () => { 
        // getSingleTask(item.id, setGetData);         
        setTaskBtnEdit(displayOff);
        setTaskBtnDelete(displayOff);
        setTaskBtnDetails(displayOff); 
        setTaskBtnStatus(displayOff);
        setTaskDetailView(displayOn);
        setTaskStatusView(displayOff); 
      }

           //after clicking 
           const handleDeleteBtnClick = () => {        
            setTaskBtnEdit(displayOff);
            setTaskBtnDelete(displayOff);
            setTaskBtnDetails(displayOff); 
            setTaskBtnStatus(displayOff);
            setTaskDetailView(displayOff);    
            setYesNoDeletePopup(displayOn);  
           }

            //after clicking 
            const handleDeleteBtnYesClick = () => {          
                deleteItem();              
             }

             //after clicking 
             const handleDeleteBtnNoClick = () => {        
              setTaskBtnEdit(displayOn);
              setTaskBtnDelete(displayOn);
              setTaskBtnDetails(displayOn); 
              setTaskBtnStatus(displayOn); 
              setYesNoDeletePopup(displayOff);                 
             }

       //item completed/in progress to display
       const itemStatusDisplay = (completedData) => {        
          if (completedData === true) {
            return todoItemStatusCompletedText
          }
          else {
            return todoItemStatusInProgressText
          }
            }         


    return (      
        <div 
        sx={{
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
      ><BigText text={ `Task # ${item.id}:`} marginBottom={2} />
        {/* display with task title*/}
        <TextArea disabled={disabled} value={textareaDisplay} 
        onChange={editItemText} backgroundColor={`inputBackground`}/>     
        <Flex sx={{flexDirection: 'row',
                   marginBottom: 2}} >            
                 <MediumText text={itemStatusDisplay(item.completed)} display={taskStatusView} />      
        </Flex>   
        <Flex sx={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start'}}> 
        {/* show details button */}
           <ButtonPrimary
            onClick={handleShowDetailsBtn} displayIt={taskBtnDetails}
            text={todoItemShowDetailsBtnTxt} backgroundColor={'buttons1'}/>  
        {/* update task button */}
            <ButtonPrimary           
            onClick={handleUpdateBtn} displayIt={taskBtnEdit}
            text={updateButtonText} backgroundColor={'buttons2'}/>   
              {/* change status button*/} 
            <ButtonPrimary 
            onClick={handleChangeStatusBtn} displayIt={taskBtnStatus}
            text={ todoItemChangeStatusBtnTxt} backgroundColor={'buttons2'}/>  
               {/* delete button*/}               
            <ButtonPrimary 
            onClick={handleDeleteBtnClick} displayIt={taskBtnDelete}
            text={deleteButtonText} backgroundColor={'buttons3'}/>       
        </Flex>        
            {/* popup with choices yes or no for editing*/}         
        <ButtonsWrapper displayStyle={yesNoEditPopup} contentArea={
        <YesNoPopup  onClickYes={() => confirmEditChanges(updatedData)} 
        onClickNo={handleUpdateNoBtn} yesText={yesText} noText={noText} messageText={editYesNoMessage}/>
        }/>  
            {/* popup with choices yes or no for delete*/}          
        <ButtonsWrapper displayStyle={yesNoDeletePopup} contentArea={
          <YesNoPopup onClickYes={handleDeleteBtnYesClick} 
          onClickNo={handleDeleteBtnNoClick} yesText={yesText} noText={noText} messageText={deleteYesNoMessage}/>
        }/>
            {/* popup with choices yes or no for changing status*/}     
         <ButtonsWrapper displayStyle={yesNoStatusPopup} contentArea={
          <YesNoPopup onClickYes={handleChoiceBoxConfirm} 
          onClickNo={handleChoiceBoxDeny} yesText={yesText} noText={noText} messageText={statusYesNoMessage} />
        }/>        
        <TaskDetails displayIt={taskDetailView} taskData={initTaskData} clickClose={handleCloseDetailsBtn} />
      </div>
    );
  }
  
  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }


  export default TodoItem;