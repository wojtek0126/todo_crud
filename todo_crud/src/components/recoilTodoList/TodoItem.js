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

    const updateText = 'Update task';
    const updateEmptyText = 'Please type in something';
    const updateSuccesstext = 'Task updated';
    const deleteText = 'Delete task';
    const deleteSuccesstext = 'Task deleted';

    const displayOn = 'flex';
    const displayOff = 'none';
  
    const [todoList, setTodoList] = useRecoilState(todoListState); 
    const [updateButtonText, setUpdateButtonText] = useState(updateText);
    const [deleteButtonText, setDeleteButtonText] = useState(deleteText);
    const [inputValue, setInputValue] = useState(''); 
    const [updatedData, setUpdatedData] = useState([]);    
    const index = todoList.findIndex((listItem) => listItem === item);
    // buttons activeate toggle
    const [taskBtnEdit, setTaskBtnEdit] = useState(displayOn); 
    const [taskBtnDelete, setTaskBtnDelete] = useState(displayOn); 
    const [yesNoEditPopup, setYesNoEditPopup] = useState(displayOff);  
    const [yesNoDeletePopup, setYesNoDeletePopup] = useState(displayOff);  
    const [taskDetailView, setTaskDetailView] = useState(displayOn);    

    // decoy for empty state inputvalue 
    console.log(inputValue);

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

    const confirmEditChanges = () => {
      if (updatedData.title === "" || updatedData.title === null || updatedData.title === undefined) {
        switchBtnTxt(setUpdateButtonText, updateText, updateEmptyText);  
      } 
      else {
        updateTask(item.id, updatedData);
        switchBtnTxt(setUpdateButtonText, updateText, updateSuccesstext);  
        setYesNoEditPopup(displayOff); 
        setTaskBtnDelete(displayOn);       
      }      
    }

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

    //toggle displays when buttons clicked
    const toggleDisplayFlex = (setDisplayOn, setDisplayOff) => {
      setDisplayOn('flex');
      setDisplayOff('none');
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
        <TextArea value={item.title} onChange={editItemText} backgroundColor={`inputBackground`}/>
        <Flex sx={{flexDirection: 'row'}}>
            <MediumText text={`Time started: ${item.created_at}`} marginBottom={`2`}/>
            {/* <MediumText text={`Last time modified: ${item.updated_at}`} marginBottom={`2`}/> */}
        </Flex> 
        <Flex sx={{flexDirection: 'row',
                   marginBottom: 2}} >
            <div sx={{marginRight: 2}}>
                 <MediumText text={`Is task completed?`} />
            </div>
        <CheckboxAtom checked={item.completed} 
          onChange={toggleItemCompletion} />         
        </Flex>   
        <Flex sx={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start'}}> 
           <ButtonPrimary
            onClick={() => toggleDisplay(setYesNoEditPopup, setTaskBtnDelete, displayOn)} displayIt={taskBtnEdit}
            text={'Show details'} backgroundColor={'buttons1'}/>         
            <ButtonPrimary 
            onClick={() => toggleDisplay(setYesNoEditPopup, setTaskBtnDelete, displayOn)} displayIt={taskBtnEdit}
            text={updateButtonText} backgroundColor={'buttons2'}/>    
            <ButtonPrimary 
            onClick={() => toggleDisplay(setYesNoEditPopup, setTaskBtnDelete, displayOn)} displayIt={taskBtnEdit}
            text={'Change status'} backgroundColor={'buttons2'}/>                
            <ButtonPrimary 
            onClick={() => toggleDisplay(setYesNoDeletePopup, setTaskBtnEdit, displayOn)} displayIt={taskBtnDelete}
            text={deleteButtonText} backgroundColor={'buttons3'}/>          
        </Flex>        
        <ButtonsWrapper displayStyle={yesNoEditPopup} contentArea={
        <YesNoPopup  onClickYes={confirmEditChanges} 
        onClickNo={() => toggleDisplay(setTaskBtnDelete, setYesNoEditPopup, displayOn)} />
        }/>       
        <ButtonsWrapper displayStyle={yesNoDeletePopup} contentArea={
          <YesNoPopup onClickYes={deleteItem} 
          onClickNo={() => toggleDisplay(setTaskBtnEdit, setYesNoDeletePopup, displayOn)} />
        }/>
        <TaskDetails displayIt={taskDetailView} taskId={item.id} />
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