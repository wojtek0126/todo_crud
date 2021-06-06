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
  taskNumberText,
  openMenuBtnIcon,
  detailsBtnIcon,
  editBtnIcon,
  statusBtnIcon,
  deleteBtnIcon,
  declineBtnIcon,
  confirmBtnIcon
} from '../../content/contentEng';
import { buttonBackgroundType1, buttonBackgroundType2, buttonBackgroundType3, taskBackground } from '../../styles/themes/theme';


const TodoItem = ({item}) => {
  //init data 
  const initialTitleDisplay = item.title;
  const todoItemPrevious = item;
  //display toggle style setting
  const on = 'flex';
  const off = 'none';
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
  const [taskBtnMenu, setTaskBtnMenu] = useState(on);  
  const [taskBtnEdit, setTaskBtnEdit] = useState(off); 
  const [taskBtnStatus, setTaskBtnStatus] = useState(off); 
  const [taskBtnDelete, setTaskBtnDelete] = useState(off);
  const [taskBtnDetails, setTaskBtnDetails] = useState(off);      
  //yes no popups active or not
  const [yesNoEditPopup, setYesNoEditPopup] = useState(off);  
  const [yesNoDeletePopup, setYesNoDeletePopup] = useState(off);  
  const [yesNoStatusPopup, setYesNoStatusPopup] = useState(off);     
  //views active or not
  const [taskDetailView, setTaskDetailView] = useState(off);
  const [taskStatusView, setTaskStatusView] = useState(on);  
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
      displayControl(off, off, off, off, off, on, off, off, false, off);
      setTextareaBorderColor('inputBorderEditon');
      setTextareaBorderFocusColor('inputBorderFocus');
        }     

    //when edit cancelled     
    const handleUpdateNoBtn = () => {  
      displayControl(on, on, on, on, off, off, off, off, true, on);
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
    const handleonBlur = (value) => {
      setTimeout(() => {
        setInput(value);  
      },100);  
    };

    //commit edit changes on click
    const confirmEditChanges = (todoDataMod) => {
      if (updatedData.title === "" || updatedData.title === null || updatedData.title === undefined) {
        setTaskBtnEdit(on);
        setYesNoEditPopup(off); 
        switchBtnTxt(setUpdateButtonText, updateText, updateEmptyText, delayTime);  
        setTimeout(() => {
          setTaskBtnEdit(off);
          setYesNoEditPopup(on); 
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
        displayControl(on, on, on, on, off, off, off, off, true, on);
        setTextareaBorderColor('inputBorder');
        setTextareaBorderFocusColor('inputBorder');                        
      }      
    }

    //when change status button clicked
    const handleChangeStatusBtn = () => {
      displayControl(off, off, off, off, off, off, on, off, true, off);       
    }

    //when status changed and answer 'yes' to confirmation question
    const handleStatusChangeConfirm = () => {
     displayControl(on, on, on, on, off, off, off, off, true, on);
     toggleItemCompletion();      
    }

    //when status changed and answer 'no' to confirmation question
    const handleStatusChangeDeny = () => {   
      displayControl(on, on, on, on, off, off, off, off, true, on);     
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
        displayControl(on, on, on, on, off, off, off, off, true, on);   
    };  

    //after clicking delete button
    const handleDeleteBtnClick = () => {  
      displayControl(off, off, off, off, on, off, off, off, true, off);          
    }

    //after clicking delete confirm button 
    const handleDeleteBtnYesClick = () => {          
        deleteItem();              
    }

    //after clicking delete no - 'go back' button
    const handleDeleteBtnNoClick = () => {    
      displayControl(on, on, on, on, off, off, off, off, true, on);                
    }
   
    //after clicking show details
    const handleShowDetailsBtn = () => { 
     displayControl(off, off, off, off, off, off, off, on, true, off);
     setTaskStatusView(off);   
    }

    //after clicking close details
    const handleCloseDetailsBtn = () => {
      displayControl(on, on, on, on, off, off, off, off, true, on); 
      setTaskStatusView(on); 
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
    
    //popup menu control
    const handleTaskMenuOpenCloseBtn = () => {
      
      displayControl(off, off, off, off, off, off, off, off, true, on); 
      setTimeout(() => {
        if (taskBtnEdit === 'none') {
          displayControl(on, on, on, on, off, off, off, off, true, on); 
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
          <TextArea disabled={disabled} value={textareaDisplay} onBlur={() => handleonBlur(textareaDisplay)}
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
            <ButtonPrimary text={openMenuBtnIcon} 
            onClick={handleTaskMenuOpenCloseBtn}
            backgroundColor={buttonBackgroundType1} displayIt={taskBtnMenu} />
           {/* show details button */}
           <ButtonPrimary
            onClick={handleShowDetailsBtn} displayIt={taskBtnDetails}
            text={detailsBtnIcon} backgroundColor={buttonBackgroundType1}/>  
            {/* update task button */}
            <ButtonPrimary           
            onClick={handleUpdateBtn} displayIt={taskBtnEdit}
            text={editBtnIcon} backgroundColor={buttonBackgroundType2}/>   
              {/* change status button*/} 
            <ButtonPrimary 
            onClick={handleChangeStatusBtn} displayIt={taskBtnStatus}
            text={statusBtnIcon} backgroundColor={buttonBackgroundType2}/>  
               {/* delete button*/}               
            <ButtonPrimary 
            onClick={handleDeleteBtnClick} displayIt={taskBtnDelete}
            text={deleteBtnIcon} backgroundColor={buttonBackgroundType3}/>       
        </Flex>        
            {/* popup with choices yes or no for editing*/}         
        <ButtonsWrapper displayStyle={yesNoEditPopup} contentArea={
        <YesNoPopup  onClickYes={() => confirmEditChanges(updatedData)} 
        onClickNo={handleUpdateNoBtn} yesText={confirmBtnIcon} noText={declineBtnIcon} messageText={editYesNoMessage}/>
        }/>  
            {/* popup with choices yes or no for delete*/}          
        <ButtonsWrapper displayStyle={yesNoDeletePopup} contentArea={
          <YesNoPopup onClickYes={handleDeleteBtnYesClick} 
          onClickNo={handleDeleteBtnNoClick} yesText={confirmBtnIcon} noText={declineBtnIcon} messageText={deleteYesNoMessage}/>
        }/>
            {/* popup with choices yes or no for changing status*/}     
         <ButtonsWrapper displayStyle={yesNoStatusPopup} contentArea={
          <YesNoPopup onClickYes={handleStatusChangeConfirm} 
          onClickNo={handleStatusChangeDeny} yesText={confirmBtnIcon} noText={declineBtnIcon} messageText={statusYesNoMessage} />
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