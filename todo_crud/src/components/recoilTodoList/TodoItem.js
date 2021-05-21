/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import { useRecoilState } from 'recoil';
import { useState } from 'react'
import { todoListState } from '../../functions/recoil'
import ButtonPrimary from '../atoms/ButtonPrimary'
import CheckboxAtom from '../atoms/Checkbox'
import { deleteTask, updateTask } from '../../API/fetch'
import MediumText from '../atoms/MediumText';
import BigText from '../atoms/BigText';
import { reloadSite } from '../../functions/functionStorage';
import TextArea from '../atoms/TextArea';


function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState); 
    const [updateButtonText, setUpdateButtonText] = useState("update");
    const [inputValue, setInputValue] = useState(''); 
    const [updatedData, setUpdatedData] = useState([]);   
    const index = todoList.findIndex((listItem) => listItem === item);   
  
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
        updated_at: Date.now()    //check here in case of update bug
      }
      setUpdatedData(todoDataMod);
      setInputValue(value);    
      setTodoList(newList);       
    };   

    const confirmEditChanges = () => {
        updateTask(item.id, updatedData);
        setUpdateButtonText("content modified");
        setTimeout(() => {
          setUpdateButtonText("update");
        }, 1800)  
        setInputValue("");      
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
       deleteTask(item.id);       
       const newList = removeItemAtIndex(todoList, index);   
      setTodoList(newList);   
    };   

  
    return (
        <div
        sx={{
          background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
          backgroundColor: 'foreground',
          borderRadius: 4,
          fontSize: 4,
          margin: 3,
          padding: 3,
        }}
      ><BigText text={ `Task # ${item.id}:`} marginBottom={2} />
        <TextArea value={item.title} onChange={editItemText} backgroundColor={`foreground`}/>
        <Flex sx={{flexDirection: 'row'}}>
            <MediumText text={`Time started: ${item.created_at}`} marginBottom={`2`}/>
            {/* <MediumText text={`Last time modified: ${item.updated_at}`} marginBottom={`3`}/> */}
        </Flex> 
        <Flex sx={{flexDirection: 'row',
                   marginBottom: 2}} >
            <div sx={{marginRight: 2}}>
                 <MediumText text={`Is task completed?`} />
            </div>
        <CheckboxAtom checked={item.completed} 
          onChange={toggleItemCompletion} />         
        </Flex>         
        <ButtonPrimary onClick={deleteItem} text={`delete`} backgroundColor={'primary'}/>
        <ButtonPrimary onClick={confirmEditChanges} text={updateButtonText} backgroundColor={'primary'}/>
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