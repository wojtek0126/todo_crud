/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { todoListState } from '../../functions/recoil';
import ButtonPrimary from '../atoms/ButtonPrimary';
import CheckboxAtom from '../atoms/Checkbox';
import { deleteTask, updateTask } from '../../API/fetch';
import MediumText from '../atoms/MediumText';
import BigText from '../atoms/BigText';
import TextArea from '../atoms/TextArea';
import { switchBtnTxt, timeStampFormatted, toggleDisplay } from '../../functions/functionStorage';
import YesNoPopup from '../molecules/YesNoPopup';
import TaskDetails from '../molecules/TaskDetails';
import ButtonsWrapper from '../atoms/ButtonsWrapper';


function TodoItem({item}) {
    // this goes to content.js
    const updateText = "Update task";
    const updateEmptyText = "Same or empty content not allowed";
    const updateSuccesstext = "Task updated";
    const deleteText = "Delete task";
    const deleteSuccesstext = "Task deleted";
    const yesText = "Confirm";
    const noText = "Go back";
    const statusYesNoMessage = "Please confirm task status change";
    const editYesNoMessage = "Please update your task and confirm changes";
    const deleteYesNoMessage = "Are you sure to delete this task?";


   //display
    const displayOn = 'flex';
    const displayOff = 'none';
  //sets equal delays for common timeouts
  const delayTime = 1800;

  
    const [todoList, setTodoList] = useRecoilState(todoListState); 
    const [updateButtonText, setUpdateButtonText] = useState(updateText);
    const [deleteButtonText, setDeleteButtonText] = useState(deleteText);
    const [inputValue, setInputValue] = useState(''); 
    const [updatedData, setUpdatedData] = useState([]);    
    const index = todoList.findIndex((listItem) => listItem === item);
    //toggle textarea enabled or disabled
    const [disabled, setDisabled] = useState(true);
    // buttons active or not
    const [taskBtnEdit, setTaskBtnEdit] = useState(displayOn); 
    const [taskBtnStatus, setTaskBtnStatus] = useState(displayOn); 
    const [taskBtnDelete, setTaskBtnDelete] = useState(displayOn);
    const [taskBtnDetails, setTaskBtnDetails] = useState(displayOn);  
    const [taskBtnCancel, setTaskBtnCancel] = useState(displayOff); 
    const [changeStatusBtn, setChangeStatusBtn] = useState(displayOff); 
    //yes no popups active or not
    const [yesNoEditPopup, setYesNoEditPopup] = useState(displayOff);  
    const [yesNoDeletePopup, setYesNoDeletePopup] = useState(displayOff);  
    const [yesNoStatusPopup, setYesNoStatusPopup] = useState(displayOff);  
    //views active or not
    const [taskDetailView, setTaskDetailView] = useState(displayOff);
    // const [taskStatusView, setTaskStatusView] = useState(displayOff);     

    // decoy for empty state inputvalue 
    console.log(inputValue);

    //edit task, just changing content without commiting
    const editItemText = ({target: {value}}) => {        
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        title: value,
      });
      const todoDataMod =    {
        id: item.id,
        user_id: item.user_id,
        title: value,
        completed: item.completed,
        created_at: item.created_at,
        updated_at: timeStampFormatted()
      }
      setUpdatedData(todoDataMod);
      setInputValue(value);    
      setTodoList(newList);       
    };   

    //commit edit changes on click
    const confirmEditChanges = () => {
      // let dataToEdit =  updatedData.title;
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
        updateTask(item.id, updatedData);
        switchBtnTxt(setUpdateButtonText, updateText, updateSuccesstext, delayTime); 
        setDisabled(true);  
        setYesNoEditPopup(displayOff); 
        setTaskBtnEdit(displayOn);
        setUpdatedData([]);
        setTimeout(() => {
          setTaskBtnEdit(displayOn);
          setTaskBtnDelete(displayOn);
          setTaskBtnDetails(displayOn); 
          setTaskBtnStatus(displayOn);         
        }, delayTime);                
      }      
    }

    //update task comletion status
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        completed: !item.completed,
      });    
      const todoDataModCheck =    {
        id: item.id,
        user_id: item.user_id,        
        title: item.title,
        completed: !item.completed,
        created_at: item.created_at,
        updated_at: timeStampFormatted()
      }
      updateTask(item.id, todoDataModCheck) 
      setTodoList(newList);        
    };
  
    //delete item on click, assigned to 'yes' button
    const deleteItem = () => {     
       switchBtnTxt(setDeleteButtonText, deleteText, deleteSuccesstext);    
       setTimeout(() => {
        deleteTask(item.id);       
        const newList = removeItemAtIndex(todoList, index);   
        setTodoList(newList);  
       }, 300);         
       setYesNoDeletePopup(displayOff);
       setTaskBtnEdit(displayOn);
    };     

    //when details close button clicked
    const handleCloseDetailsBtn = () => {
      setTaskDetailView(displayOff);
      setTaskBtnEdit(displayOn);
      setTaskBtnDelete(displayOn);
      setTaskBtnDetails(displayOn); 
      setTaskBtnStatus(displayOn);  
    }

    //when update button clicked and updating enabled
    const handleUpdateBtn = () => {
      setTaskDetailView(displayOff);
      setTaskBtnEdit(displayOff);
      setTaskBtnDelete(displayOff);
      setTaskBtnDetails(displayOff); 
      setTaskBtnStatus(displayOff);  
      setYesNoEditPopup(displayOn);
      // toggleDisplay(setYesNoEditPopup, setTaskBtnDelete, displayOn);
      setDisabled(false);
    }

    //when update button clicked and clicking 'no' button
    const handleUpdateNoBtn = () => {
      setTaskBtnEdit(displayOn);
      setTaskBtnDelete(displayOn);
      setTaskBtnDetails(displayOn); 
      setTaskBtnStatus(displayOn);  
      setYesNoEditPopup(displayOff);
      setDisabled(true);
    }

    //when change status button clicked
    const handleChangeStatusBtn = () => {
      setTaskBtnEdit(displayOff);
      setTaskBtnDelete(displayOff);
      setTaskBtnDetails(displayOff); 
      setTaskBtnStatus(displayOff);
      setYesNoStatusPopup(displayOn);  
      // setTaskBtnCancel(displayOn);
      // setTaskStatusView(displayOn);     
    }

       //when cancel button clicked
      //  const handleCancelBtn = () => {
      //   setTaskBtnEdit(displayOn);
      //   setTaskBtnDelete(displayOn);
      //   setTaskBtnDetails(displayOn); 
      //   setTaskBtnStatus(displayOn);
      //   setTaskBtnCancel(displayOff);
      //   setTaskStatusView(displayOff);     
      // }

      //when status changed go to confirmation  'yes or no' question
      // const handleChoiceBox = () => {
      //  setYesNoStatusPopup(displayOn);  
      //  setTaskStatusView(displayOff);   
      //  setTaskBtnCancel(displayOff); 
      // }

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
        setTaskBtnEdit(displayOff);
        setTaskBtnDelete(displayOff);
        setTaskBtnDetails(displayOff); 
        setTaskBtnStatus(displayOff);
        setTaskDetailView(displayOn); 
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
              setTaskBtnEdit(displayOff);
              setTaskBtnDelete(displayOff);
              setTaskBtnDetails(displayOff); 
              setTaskBtnStatus(displayOff);
              setTaskDetailView(displayOff);    
              setYesNoDeletePopup(displayOn);  
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
            return "Task is completed"
          }
          else {
            return "Task is currently in progress"
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
        <TextArea disabled={disabled} value={item.title} onChange={editItemText} backgroundColor={`inputBackground`}/>     
        <Flex sx={{flexDirection: 'row',
                   marginBottom: 2}} >            
                 <MediumText text={itemStatusDisplay(item.completed)} />      
        </Flex>   
        <Flex sx={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start'}}> 
           <ButtonPrimary
            onClick={handleShowDetailsBtn} displayIt={taskBtnDetails}
            text={'Show details'} backgroundColor={'buttons1'}/>         
            <ButtonPrimary 
            onClick={handleUpdateBtn} displayIt={taskBtnEdit}
            text={updateButtonText} backgroundColor={'buttons2'}/>    
            <ButtonPrimary 
            onClick={handleChangeStatusBtn} displayIt={taskBtnStatus}
            text={'Change status'} backgroundColor={'buttons2'}/>                
            <ButtonPrimary 
            onClick={handleDeleteBtnClick} displayIt={taskBtnDelete}
            text={deleteButtonText} backgroundColor={'buttons3'}/>       
        </Flex>        
        <ButtonsWrapper displayStyle={yesNoEditPopup} contentArea={
        <YesNoPopup  onClickYes={confirmEditChanges} 
        onClickNo={handleUpdateNoBtn} yesText={yesText} noText={noText} messageText={editYesNoMessage}/>
        }/>       
        <ButtonsWrapper displayStyle={yesNoDeletePopup} contentArea={
          <YesNoPopup onClickYes={handleDeleteBtnYesClick} 
          onClickNo={handleDeleteBtnNoClick} yesText={yesText} noText={noText} messageText={deleteYesNoMessage}/>
        }/>
         <ButtonsWrapper displayStyle={yesNoStatusPopup} contentArea={
          <YesNoPopup onClickYes={handleChoiceBoxConfirm} 
          onClickNo={handleChoiceBoxDeny} yesText={yesText} noText={noText} messageText={statusYesNoMessage} />
        }/>   
        <TaskDetails displayIt={taskDetailView} taskId={item.id} clickClose={handleCloseDetailsBtn} />
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