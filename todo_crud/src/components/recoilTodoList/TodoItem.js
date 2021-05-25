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
import { switchBtnTxt, timeStampFormatted } from '../../functions/functionStorage';
import YesNoPopup from '../molecules/YesNoPopup';


function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState); 
    const [updateButtonText, setUpdateButtonText] = useState("Update");
    const [deleteButtonText, setDeleteButtonText] = useState("Delete");
    const [inputValue, setInputValue] = useState(''); 
    const [updatedData, setUpdatedData] = useState([]);    
    const index = todoList.findIndex((listItem) => listItem === item);
    // buttons activeate toggle
    const [taskBtnEdit, setTaskBtnEdit] = useState("flex"); 
    const [taskBtnDelete, setTaskBtnDelete] = useState("flex"); 
    const [yesNoEditPopup, setYesNoEditPopup] = useState("none");  
    const [yesNoDeletePopup, setYesNoDeletePopup] = useState("none");   

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
      if (inputValue === "" || inputValue === null || inputValue === undefined) {
        switchBtnTxt(setUpdateButtonText, 'Update', 'Same or empty content');  
      } 
      else {
        updateTask(item.id, updatedData);
        switchBtnTxt(setUpdateButtonText, 'Update', 'Updated');  
        setYesNoEditPopup("none"); 
        setTaskBtnDelete('flex');       
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
        updated_at: Date.now()
      }
      updateTask(item.id, todoDataModCheck) 
      setTodoList(newList);        
    };
  
    const deleteItem = () => {     
       switchBtnTxt(setDeleteButtonText, 'Delete', 'Deleted');    
       setTimeout(() => {
        deleteTask(item.id);       
        const newList = removeItemAtIndex(todoList, index);   
        setTodoList(newList);  
       }, 300);         
       setYesNoDeletePopup("none");
       setTaskBtnEdit('flex');
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
        <Flex sx={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}> 
            <ButtonPrimary onClick={() => toggleDisplayFlex(setYesNoEditPopup, setTaskBtnDelete)} displayIt={taskBtnEdit}
            text={updateButtonText} backgroundColor={'buttons2'}/>     
            <ButtonPrimary onClick={() => toggleDisplayFlex(setYesNoDeletePopup, setTaskBtnEdit)} displayIt={taskBtnDelete}
            text={deleteButtonText} backgroundColor={'buttons3'}/>          
        </Flex>
        <div sx={{display: `${yesNoEditPopup}`, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
          <YesNoPopup  onClickYes={confirmEditChanges} onClickNo={() => toggleDisplayFlex(setTaskBtnDelete, setYesNoEditPopup)} />
        </div>  
        <div sx={{display: `${yesNoDeletePopup}`, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
          <YesNoPopup onClickYes={deleteItem} onClickNo={() => toggleDisplayFlex(setTaskBtnEdit, setYesNoDeletePopup)} />
        </div> 
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