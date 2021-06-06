/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { useState, useEffect } from 'react';
import { textInputState, todoListState } from '../../functions/recoil';
import ButtonPrimary from '../atoms/ButtonPrimary';
import { deleteTask, updateTask } from '../../API/fetch';
import MediumText from '../atoms/MediumText';
import BigText from '../atoms/BigText';
import TextArea from '../atoms/TextArea';
import { switchBtnTxt, timeStampFormatted, } from '../../functions/functionStorage';
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
  todoItemShowDetailsBtnTxt,
  taskNumberText
} from '../../content/contentEng';
import { buttonBackgroundType1, buttonBackgroundType2, buttonBackgroundType3, taskBackground } from '../../styles/themes/theme';


const TodoItem = ({item}) => {
  //init data 
  const initialTitleDisplay = item.title;
  const todoItemPrevious = item;
  //display toggle style setting
  const displayOn = 'flex';
  const displayOff = 'none';
  //sets equal delays for common timeouts
  const delayTime = 1800;

  //takes whole list from recoilState
  const [todoList, setTodoList] = useRecoilState(todoListState); 
   //index finder
   const index = todoList.findIndex((listItem) => listItem === item);
  //text on update button
  const [updateButtonText, setUpdateButtonText] = useState(updateText);
  //initial and updated task data
  const [initTaskData, setInitTaskData] = useState(item);  
  const [updatedData, setUpdatedData] = useState(todoItemPrevious);      
  //toggle textarea enabled or disabled
  const [disabled, setDisabled] = useState(true);
  //textarea
  const [textareaDisplay, setTextareaDisplay] = useState(initialTitleDisplay);   
  // buttons active or not
  const [taskBtnMenu, setTaskBtnMenu] = useState(displayOn);  
  const [taskBtnEdit, setTaskBtnEdit] = useState(displayOff); 
  const [taskBtnStatus, setTaskBtnStatus] = useState(displayOff); 
  const [taskBtnDelete, setTaskBtnDelete] = useState(displayOff);
  const [taskBtnDetails, setTaskBtnDetails] = useState(displayOff);      
  //yes no popups active or not
  const [yesNoEditPopup, setYesNoEditPopup] = useState(displayOff);  
  const [yesNoDeletePopup, setYesNoDeletePopup] = useState(displayOff);  
  const [yesNoStatusPopup, setYesNoStatusPopup] = useState(displayOff);     
  //views active or not
  const [taskDetailView, setTaskDetailView] = useState(displayOff);
  const [taskStatusView, setTaskStatusView] = useState(displayOn);  
  //set border color for textarea when edited or not
  const [textareaBorderColor, setTextareaBorderColor] = useState('inputBorder');
  const [textareaBorderFocusColor, setTextareaBorderFocusColor] = useState('inputBorder');
  //set dynamic character count
  const setInput = useSetRecoilState(textInputState); 
  const getInput = useRecoilValue(textInputState);  
 
    
console.log(getInput, "input do edit item z recoila");
    //data to retrieve initial input if edit cancelled
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
    }, [item]);   
    
    //when edit button clicked 
    const handleUpdateBtn = () => {    
      displayControl(displayOff, displayOff, displayOff, displayOff, displayOff, displayOn, displayOff, displayOff, false, displayOff);
      setTextareaBorderColor('inputBorderEditOn');
      setTextareaBorderFocusColor('inputBorderFocus');
        }     

    //when edit cancelled     
    const handleUpdateNoBtn = () => {  
      displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn);
      //      
      setTextareaDisplay(todoList[index].title);
      // 
      setTextareaBorderColor('inputBorder');
      setTextareaBorderFocusColor('inputBorder');
      setUpdatedData(initTaskData);
    } 

    //edit dynamic content value on change
    const editItemText = ({target: {value}}) => {   
      
      const todoDataMod = {
        id: item.id,
        user_id: item.user_id,
        title: value,
        completed: item.completed,
        created_at: item.created_at,
        updated_at: timeStampFormatted()
      }      
      setTextareaDisplay(todoDataMod.title);    
      setUpdatedData(todoDataMod);    
    };   
    
    //onblur
    const handleOnBlur = (value) => {
      setTimeout(() => {
        setInput(value);  
      },100);  
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
        updateTask(item.id, todoDataMod);  //
        // setTextareaDisplay(todoDataMod.title);    
        setInitTaskData(item);            //  
        const newList = replaceItemAtIndex(todoList, index, {
          ...item,
          title: todoDataMod.title,
          updated_at: timeStampFormatted()
        });   
   setTodoList(newList);     
        displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn);
        setTextareaBorderColor('inputBorder');
        setTextareaBorderFocusColor('inputBorder');                        
      }      
    }

    //when change status button clicked
    const handleChangeStatusBtn = () => {
      displayControl(displayOff, displayOff, displayOff, displayOff, displayOff, displayOff, displayOn, displayOff, true, displayOff);       
    }

    //when status changed and answer 'yes' to confirmation question
    const handleStatusChangeConfirm = () => {
     displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn);
     toggleItemCompletion();      
    }

    //when status changed and answer 'no' to confirmation question
    const handleStatusChangeDeny = () => {   
      displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn);     
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
  
    //delete item on click, assigned to delete popup 'confirm' button
    const deleteItem = () => {       
        deleteTask(item.id);       
        const newList = removeItemAtIndex(todoList, index);   
        setTodoList(newList);             
        displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn);   
    };  

    //after clicking delete button
    const handleDeleteBtnClick = () => {  
      displayControl(displayOff, displayOff, displayOff, displayOff, displayOn, displayOff, displayOff, displayOff, true, displayOff);          
    }

    //after clicking delete confirm button 
    const handleDeleteBtnYesClick = () => {          
        deleteItem();              
    }

    //after clicking delete no - 'go back' button
    const handleDeleteBtnNoClick = () => {    
      displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn);                
    }
   
    //after clicking show details
    const handleShowDetailsBtn = () => { 
     displayControl(displayOff, displayOff, displayOff, displayOff, displayOff, displayOff, displayOff, displayOn, true, displayOff);
     setTaskStatusView(displayOff);   
    }

    //after clicking close details
    const handleCloseDetailsBtn = () => {
      displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn); 
      setTaskStatusView(displayOn); 
    }     
 
    //item completed/in progress to display
    const itemStatusDisplay = (completedData) => {        
       if (completedData === true) {
         return todoItemStatusCompletedText;
       }
       else {
         return todoItemStatusInProgressText;
       }
         }    
    
    //display control function     
    const displayControl = (setBtnEdit, setBtnDelete, setBtnStatus, 
       setBtnDetails, setPopupDel, setPopupEdit, setPopupStatus, setDetailView, disableEditbool, setBtnMenu) => {
      setTaskBtnMenu(setBtnMenu);
      setTaskBtnEdit(setBtnEdit);
      setTaskBtnDelete(setBtnDelete);
      setTaskBtnDetails(setBtnDetails); 
      setTaskBtnStatus(setBtnStatus); 
      setYesNoDeletePopup(setPopupDel); 
      setYesNoEditPopup(setPopupEdit); 
      setYesNoStatusPopup(setPopupStatus);       
      setDisabled(disableEditbool);   
      setTaskDetailView(setDetailView);        
    };
    
    const handleTaskMenuOpenCloseBtn = () => {
      
      displayControl(displayOff, displayOff, displayOff, displayOff, displayOff, displayOff, displayOff, displayOff, true, displayOn); 
      setTimeout(() => {
        if (taskBtnEdit === 'none') {
          displayControl(displayOn, displayOn, displayOn, displayOn, displayOff, displayOff, displayOff, displayOff, true, displayOn); 
        }
      },10);

    }


    return (      
        <div 
        sx={{
          background: 'box',     
          // backgroundColor: 'boxBackground',
          background: `${taskBackground}`,
          color: 'text',
          border: '2px solid', 
          borderColor: 'boxBorder',  
          borderRadius: 4,
          fontSize: 4,
          margin: 3,
          padding: 3,
        }}
        ><BigText text={ `${taskNumberText} # ${item.id}:`} marginBottom={2} />
        {/* display with task title*/}
          <TextArea disabled={disabled} value={textareaDisplay} onBlur={() => handleOnBlur(textareaDisplay)}
          textareaBorderColor={textareaBorderColor}
          textareaBorderFocusColor={textareaBorderFocusColor}
        onChange={editItemText} backgroundColor={`inputBackground`}/>     
        <Flex sx={{flexDirection: 'row',
                   marginBottom: 2,
                   '@media screen and (max-width: 700px)': {                   
                    alignItems: 'center',
                    justifyContent: 'center'}}} >            
          <MediumText text={itemStatusDisplay(item.completed)} display={taskStatusView} />      
        </Flex>   
        <Flex sx={{flexWrap: 'wrap',
                   flexDirection: 'row',
                   justifyContent: 'flex-start',
                   '@media screen and (max-width: 700px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'}}}> 
            {/* open close task options */}
            <ButtonPrimary text={`x`} 
            onClick={handleTaskMenuOpenCloseBtn}
            backgroundColor={buttonBackgroundType1} displayIt={taskBtnMenu} />
           {/* show details button */}
           <ButtonPrimary
            onClick={handleShowDetailsBtn} displayIt={taskBtnDetails}
            text={todoItemShowDetailsBtnTxt} backgroundColor={buttonBackgroundType1}/>  
            {/* update task button */}
            <ButtonPrimary           
            onClick={handleUpdateBtn} displayIt={taskBtnEdit}
            text={updateButtonText} backgroundColor={buttonBackgroundType2}/>   
              {/* change status button*/} 
            <ButtonPrimary 
            onClick={handleChangeStatusBtn} displayIt={taskBtnStatus}
            text={ todoItemChangeStatusBtnTxt} backgroundColor={buttonBackgroundType2}/>  
               {/* delete button*/}               
            <ButtonPrimary 
            onClick={handleDeleteBtnClick} displayIt={taskBtnDelete}
            text={deleteText} backgroundColor={buttonBackgroundType3}/>       
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
          <YesNoPopup onClickYes={handleStatusChangeConfirm} 
          onClickNo={handleStatusChangeDeny} yesText={yesText} noText={noText} messageText={statusYesNoMessage} />
        }/>        
        <TaskDetails displayIt={taskDetailView} taskData={updatedData} clickClose={handleCloseDetailsBtn} />
      </div>
    );
  }
  
  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }


  export default TodoItem;